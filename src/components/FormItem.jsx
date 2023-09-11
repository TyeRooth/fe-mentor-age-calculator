import PropTypes from "prop-types";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
`

const FormItem = ({ id, label, placeholder }) => {
  return (
    <Article>
      <label htmlFor={id} className="birthdate-form-label">
        {label}
      </label>
      <input
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
