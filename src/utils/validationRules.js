export const notEmpty = val => ({
  message: "Field can't be empty",
  result: !!val,
});

export const symbolsLimit = limit => val => ({
  message: `${limit} symbols maximum`,
  result: val.length < limit,
});

export const symbolsMinLimit = limit => val => ({
  message: `${limit} symbols minimum`,
  result: val.length >= limit,
});

export const emailValidation = val => ({
  message: 'Wrong email',
  result: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
});

export const passwordValidation = val => ({
  message: 'Password must contain 1 number and 1 symbol',
  result: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(val),
});
