import "./TextField.css";

const TextField = (props) => {
  const onTextChanged = (event) => {
    props.onValueChanged(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onTextChanged}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextField;
