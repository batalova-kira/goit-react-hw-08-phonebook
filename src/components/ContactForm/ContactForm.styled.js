import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  max-width: 380px;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;

  &:focus,
  &:hover,
  &:active {
    outline: 0;
    outline-offset: 0;
    border: none;
  }
`;
