import React from 'react'
import { connect } from 'react-redux'
import { saveComboItem } from '../actions/comboBoxActions'

const ligen = [
  {value: 1, text: 'Erste Liga'},
  {value: 2, text: 'Zweite Liga'}
]


const renderComboBoxItems = (ligen, dispatch) => {
  return ligen.map((liga, i) => {
    console.log(liga)
    return (
      <option 
        value={liga.value}
        key={i}
        onClick={() => {dispatch(saveComboItem(liga.text))}}
      >
        {liga.text}
      </option>
    )
  })
}

const ComboBox = ({dispatch}) => {
  return (
    <form> 
      <select name="liga" size="5">
        {renderComboBoxItems(ligen, dispatch)}
      </select> 
    </form>
  )
}

export default connect(null, null)(ComboBox)
