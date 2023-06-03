import { Wrapper } from './OrderForm.styled';
import SimpleMap from 'reusableComponents/map/Map';
import { InputApp } from '../../../reusableComponents';
import { notEmpty, emailValidation } from 'utils/validationRules';
import MapSearch from 'reusableComponents/map/MapSearch';
import { useState } from 'react';

export default function OrderForm({
  setName,
  setEmail,
  setPhone,
  setAddress,
  data,
  addToInput,
}) {
  const [selected, setSelected] = useState(undefined);

  return (
    <Wrapper component="form">
      <SimpleMap selected={selected} setSelected={setSelected} />

      <InputApp
        error={true}
        validationRules={[notEmpty]}
        id="name"
        label="Name"
        variant="outlined"
        value={data.name}
        onChange={setName}
        addToInput={addToInput}
      />
      <InputApp
        error={true}
        validationRules={[notEmpty, emailValidation]}
        id="email"
        label="Email"
        variant="outlined"
        value={data.email}
        onChange={setEmail}
        addToInput={addToInput}
      />
      <InputApp
        error={true}
        validationRules={[notEmpty]}
        id="phone"
        label="Phone"
        variant="outlined"
        value={data.phone}
        onChange={setPhone}
        addToInput={addToInput}
      />

      <MapSearch
        setSelected={setSelected}
        error={true}
        validationRules={[notEmpty]}
        id="address"
        label="Address"
        variant="outlined"
        value={data.address}
        onChange={setAddress}
        addToInput={addToInput}
      />
    </Wrapper>
  );
}
