import PropTypes from "prop-types";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  flex: 1;
  min-width: 0;
`

const Input = styled.input`
  font-size: 32px;
  max-width: 100%;
  flex-shrink: 1;
  border-radius: 8px;
  border-style: solid;
  border-color: hsl(0, 0%, 86%);
  color: hsl(0, 0%, 8%);
  padding: 10px;
  caret-color: hsl(259, 100%, 65%);
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
`

const Label = styled.label`
  max-width: 100%;
  color: hsl(0, 1%, 44%);
  font-size: 12px;
  display: block;
`

const FormItem = ({ id, label, placeholder }) => {
  return (
    <Article>
      <Label htmlFor={id} className="birthdate-form-label">
        {label}
      </Label>
      <Input
        name={id}
        id={id}
        className="birthdate-form-input"
        placeholder={placeholder}
      />
    </Article>
  );
};

FormItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormItem;
