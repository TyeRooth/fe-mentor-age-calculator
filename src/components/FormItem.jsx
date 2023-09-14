import PropTypes from "prop-types";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 150px;
  flex: 1;
  min-width: 0;
`;

const Input = styled.input`
  font-size: 32px;
  max-width: 100%;
  flex-shrink: 1;
  border-radius: 8px;
  border-style: solid;
  border-color: ${(props) => {
    if (props.error) return "hsl(0, 100%, 67%)";
    return "hsl(0, 0%, 86%)";
  }};
  color: hsl(0, 0%, 8%);
  padding: 10px;
  &:hover {
    cursor: pointer;
    border-color: hsl(0, 1%, 44%);
  }
  &:focus {
    outline: none;
    border-color: hsl(259, 100%, 65%);
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Label = styled.label`
  max-width: 100%;
  color: ${(props) => {
    if (props.error) return "hsl(0, 100%, 67%)";
    return "hsl(0, 1%, 44%)";
  }};
  font-size: 12px;
  display: block;
`;

const Error = styled.p`
  color: hsl(0, 100%, 67%);
  font-family: poppinsItalic;
  font-size: 0.8rem;
  @media screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;

const FormItem = ({ id, label, placeholder, error }) => {
  return (
    <Article>
      <Label htmlFor={id} className="birthdate-form-label" error={error}>
        {label}
      </Label>
      <Input
        name={id}
        id={id}
        className="birthdate-form-input"
        placeholder={placeholder}
        error={error}
      />
      {error ? <Error>{error}</Error> : null}
    </Article>
  );
};

FormItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default FormItem;
