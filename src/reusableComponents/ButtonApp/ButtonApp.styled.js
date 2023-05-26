import styled from '@emotion/styled';

export const ButtonApp = styled.button`
  height: 40px;
  padding: 5px 15px;
  font-size: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border-color: #ff662d;
  background-color: #ff662d;
  border-style: inherit;
  transition: background-color 300ms;
  &:hover {
    background-color: transparent;
  }
`;
