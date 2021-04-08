import PropTypes from "prop-types";

const Button = ({ btnClass, text, onClick }) => {
  
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  btnClass: "btn-primary",
  text: "class",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
