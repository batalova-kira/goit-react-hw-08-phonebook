import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const ContactItem = styled.li`
  max-width: 400px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;
