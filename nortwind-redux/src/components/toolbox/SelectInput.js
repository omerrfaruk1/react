import React from "react";

const SelectInput = ({
  name,
  label,
  onChange,
  defaulOption,
  value,
  error,
  options,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value="">{defaulOption}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
      <div className="mt-2" ></div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default SelectInput;