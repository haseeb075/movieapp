import React from 'react'
import Select from 'react-select/dist/declarations/src/Select'

const options =[
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'react-native'},
{label: 'JS', value: 'js'},

]

export const CustomSelect = (props) => {
  return (
    <div>
      <Select options={options } />
    </div>
  )
}
