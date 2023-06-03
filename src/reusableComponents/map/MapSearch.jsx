import { Box, Autocomplete, TextField } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

export default function MapSearch(props) {
  const { addToInput } = props;
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const ref = useRef();
  ref.name = props.label;

  const validate = function () {
    const valid = props.validationRules.every(rule => {
      const { result, message } = rule(props.value);
      setError(!result);
      setErrorMessage(message);

      return result;
    });
    return valid;
  };
  ref.validate = validate;

  useEffect(() => {
    addToInput(null);
    if (addToInput) addToInput(ref);
    // eslint-disable-next-line
  }, []);

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async address => {
    if (!address) return;
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    props.setSelected({ lat, lng });
  };

  const changeHandler = e => {
    const value = e.target.value;
    props.onChange(value);
    setValue(props.value);
  };
  useEffect(() => {
    props.onChange(value);
  }, [value]);

  return (
    <Box>
      <Autocomplete
        onChange={(event, newValue) => handleSelect(newValue)}
        id={props.id}
        freeSolo
        value={props.value}
        options={
          status === 'OK'
            ? data.map(option => {
                return option.description;
              })
            : []
        }
        renderInput={params => (
          <TextField
            {...params}
            ref={ref}
            error={error}
            helperText={error && errorMessage}
            id={props.id}
            label={props.label}
            variant={props.variant}
            value={props.value}
            onChange={changeHandler}
            disabled={!ready}
            onBlur={validate}
          />
        )}
      />
    </Box>
  );
}
