import PropTypes from "prop-types";

const FormItem = ({ id, label, placeholder }) => {
  return (
    <article className="birthdate-form-item">
      <label htmlFor={id} className="birthdate-form-label">
        {label}
      </label>
      <input
        name={id}
        id={id}
        className="birthdate-form-input"
        placeholder={placeholder}
      />
    </article>
  );
};

FormItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormItem;
