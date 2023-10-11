import PropTypes from "prop-types";

Botton.propTypes = {
  text: PropTypes.string.isRequired,
};

export function Botton({ text, name = "Usuario" }) {
  // Proptypes
  if (!text) {
    console.error("No text provided");
  }
  return (
    <button>
      {text} - {name}
    </button>
  );
}
