import { TextField } from '@mui/material';
import { useState, useRef, useEffect } from 'react';

export default function InputApp(props) {
  const { addToInput, onChange } = props;
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

  const changeHandler = e => {
    props.onChange(e.target.value);
    onChange(e.target.value);
  };

  return (
    <TextField
      {...props.params}
      ref={ref}
      error={error}
      helperText={error && errorMessage}
      id={props.id}
      label={props.label}
      variant={props.variant}
      value={props.value}
      onChange={changeHandler}
      onBlur={validate}
    />
  );
}
