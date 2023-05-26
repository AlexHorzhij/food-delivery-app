import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Img = styled.img`
  height: 200px;
  width: 300px;
  margin-bottom: 10px;
`;
export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  align-self: start;
`;

export const Price = styled.p`
  align-self: start;
  margin-bottom: 10px;
`;

export const btnStyle = {
  alignSelf: 'flex-end',
};
