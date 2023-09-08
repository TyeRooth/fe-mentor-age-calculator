import PropTypes from "prop-types";

const FormItem = ({ name, label, placeholder }) => {
  return (
    <article className="birthdate-form-item">
      <label htmlFor={name} className="birthdate-form-label">
        {label}
      </label>
      <input
        name={name}
        id={name}
        className="birthdate-form-input"
        placeholder={placeholder}
      />
    </article>
  );
};

FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormItem;
