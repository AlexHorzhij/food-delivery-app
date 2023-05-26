import { ButtonApp } from './ButtonApp.styled';

export default function Button({ text, size, style, onClick }) {
  return (
    <ButtonApp style={{ width: size, ...style }} onClick={onClick}>
      {text}
    </ButtonApp>
  );
}
