import styled from 'styled-components';

const Icon = styled.img`
  width: 30px;
  cursor: pointer;
  transition: 300ms all ease-in-out;
  filter: gray;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  &:hover {
    opacity: 0.7;
  }
`;

export default Icon;
