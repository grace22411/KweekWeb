import React from "react";
import { Select } from "antd";
const { Option } = Select;

export const DropDown = ({
  options,
  value,
  onSelect,
  defaultValue,
  placeholder,
  dropdownClass,
  className,
  style,
  customDropdown = false,
  hasIcon = false,
  size,
  iconClass
}) => {
  if (customDropdown) {
    return (
      <span className={className}>
        <Select
          style={style}
          onChange={onSelect}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          dropdownClassName={dropdownClass}
          size={size}
        >
          {options.length < 1 &&
              <Option>
                <span
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    color: '#37517E'
                  }}
                >
                  No data found
                </span>
              </Option>
          }
          {options.map((value, index) => {
            return (
              <Option key={`${value}_${index}`} value={value.value}>
                  {hasIcon ? 
                  <span className='dropdown-format'>
                    <img src={value.icon} alt="" className={iconClass} /> 
                    <small><strong className="font-extrabold" style={{color: '#222'}}>{value.value}</strong></small>
                  </span> : 
                  <span className='dropdown-format'>
                    {value.label} <strong>{value.value}</strong>
                  </span>}
              </Option>
            );
          })}
        </Select>
      </span>
    );
  }
  return (
    <span className={className}>
      <Select
        style={style}
        onChange={onSelect}
        value={value}
        options={options}
        defaultValue={defaultValue}
        placeholder={placeholder}
        dropdownClassName={dropdownClass}
        size={size}
      />
    </span>
  );
};

export default DropDown;
