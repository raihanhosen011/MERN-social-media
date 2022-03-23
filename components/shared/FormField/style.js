import styled from "styled-components";

export const StyledFormField = styled.label`
  display: block;
  margin-bottom: var(--mb-0-7);
`;

export const Label = styled.span`
  font-size: var(--normal-font-size);
  color: var(--title-color);
  margin-bottom: 2px;
  display: block;
`;

export const Input = styled.input.attrs(({ id, type, field }) => ({
  id,
  name: id,
  type: type || "text",
  ...field,
}))`
  width: 100%;
  height: 100%;
  font-size: var(--normal-font-size);
  color: var(--title-color);
  background: transparent;

  &::placeholder {
    color: #7e7e7e;
  }
`;

export const TextArea = styled(Input).attrs(() => ({ as: "textarea" }))`
  height: 9rem;
  resize: none;
  background: var(--input-color);

  @media (min-width: 700px) {
    height: 12rem;
  }
`;

export const FieldInput = styled.div`
  position: relative;
  background: var(--input-color);
  padding: var(--mb-0-5);
  border-radius: var(--radius-sm);
  ${({ border }) => border && 'border: 1px solid #cf3535'}
`;

export const LabelError = styled(Label)`
  color: #cf3535;
  padding: 0px;
  font-size: 14px;
`;
