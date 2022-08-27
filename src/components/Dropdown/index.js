import "./Dropdown.css";

const Dropdown = (props) => {
  const onSelectChanged = (event) => {
    props.onValueChanged(event.target.value);
  };

  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={onSelectChanged}
        required={props.required}
      >
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
