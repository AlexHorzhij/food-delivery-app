import { TextField } from '@mui/material';
import { useState, useRef, useEffect } from 'react';

export default function InputApp(props) {
  const { addToInput } = props;
  const [state, setState] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const ref = useRef();
  ref.name = props.label;

  const validate = function () {
    const valid = props.validationRules.every(rule => {
      const { result, message } = rule(state);
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
    setState(e.target.value);
  };

  return (
    <TextField
      ref={ref}
      error={error}
      helperText={error && errorMessage}
      id={props.id}
      label={props.label}
      variant={props.variant}
      value={state}
      onChange={changeHandler}
      onBlur={validate}
    />
  );
}
