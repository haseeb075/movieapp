import React from 'react'
import Select from 'react-select';



export const CustomSelect = (props) => {
  const {label, options, onChange, defaultValue} = props;
  return (
    <div>
      <h6>{label}</h6>
      <Select options={options } onChange={onChange} defaultValue={defaultValue} />
    </div>
  )
}
