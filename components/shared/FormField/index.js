import { useField } from "formik";
import {
  StyledFormField,
  Label,
  Input,
  TextArea,
  LabelError,
  FieldInput,
} from "./style";

const FormField = ({ field }) => {
  const { id, label, placeholder, type } = field;
  const [fieldFormik, meta] = useField({ name: id, type });

  let showError = meta.touched && meta.error

  return (
    <>
      <StyledFormField>
          <Label>{label}</Label>
          
          <FieldInput border={showError} >
            {field.type === "textarea" ? (
              <TextArea id={id} placeholder={placeholder} field={fieldFormik} />
            ) : (
              <Input id={id} placeholder={placeholder} field={fieldFormik} />
            )}
          </FieldInput>

          {showError ? (
             <LabelError>{meta.error}</LabelError>
          ) : null}
      </StyledFormField>
    </>
  );
};

export default FormField;
