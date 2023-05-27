import { Wrapper } from './OrderForm.styled';
import { TextField } from '@mui/material';

export default function OrderForm({
  setName,
  setEmail,
  setPhone,
  setAddress,
  data,
}) {
  return (
    <Wrapper component="form">
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        value={data.name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        value={data.email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        id="phone"
        label="Phone"
        variant="outlined"
        value={data.phone}
        onChange={e => setPhone(e.target.value)}
      />
      <TextField
        id="address"
        label="Address"
        variant="outlined"
        value={data.address}
        onChange={e => setAddress(e.target.value)}
      />
    </Wrapper>
  );
}
