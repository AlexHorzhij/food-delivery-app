import { Wrapper } from './OrderForm.styled';
import SimpleMap from 'reusableComponents/Map';
import { InputApp } from '../../../reusableComponents';
import { notEmpty, emailValidation } from 'utils/validationRules';

export default function OrderForm({
  setName,
  setEmail,
  setPhone,
  setAddress,
  data,
  addToInput,
}) {
  return (
    <Wrapper component="form">
      <SimpleMap />

      <InputApp
        error={true}
        validationRules={[notEmpty]}
        id="name"
        label="Name"
        variant="outlined"
        value={data.name}
        onChange={e => setName(e.target.value)}
        addToInput={addToInput}
      />
      <InputApp
        error={true}
        validationRules={[notEmpty, emailValidation]}
        id="email"
        label="Email"
        variant="outlined"
        value={data.email}
        onChange={e => setEmail(e.target.value)}
        addToInput={addToInput}
      />
      <InputApp
        error={true}
        validationRules={[notEmpty]}
        id="phone"
        label="Phone"
        variant="outlined"
        value={data.phone}
        onChange={e => setPhone(e.target.value)}
        addToInput={addToInput}
      />
      <InputApp
        error={true}
        validationRules={[notEmpty]}
        id="address"
        label="Address"
        variant="outlined"
        value={data.address}
        onChange={e => setAddress(e.target.value)}
        addToInput={addToInput}
      />
    </Wrapper>
  );
}
