import "./Input.css";
const Input = (props) => {
  return (
    <input
      type="text"
      className="mini-form__destination-field field"
      placeholder={props.placeholder}
    />
  );
};

export default Input;
