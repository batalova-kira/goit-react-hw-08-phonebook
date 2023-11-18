import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  max-width: 380px;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  margin-bottom: 16px;
  display: block;
  border: 1px solid #16b3cf;
  border-radius: 4px;
  &:focus,
  &:hover,
  &:active {
    outline: 0;
    outline-offset: 0;
    border: none;
  }
`;
