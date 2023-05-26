import { Wrapper } from './OrderForm.styled';
import { TextField } from '@mui/material';

export default function OrderForm({ setName, setEmail, setPhone, setAddress }) {
  return (
    <Wrapper component="form">
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        onChange={e => setName(e.target.value)}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        id="phone"
        label="Phone"
        variant="outlined"
        onChange={e => setPhone(e.target.value)}
      />
      <TextField
        id="address"
        label="Address"
        variant="outlined"
        onChange={e => setAddress(e.target.value)}
      />
    </Wrapper>
  );
}
