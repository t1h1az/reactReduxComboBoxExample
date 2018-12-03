import React from 'react'
import { connect } from 'react-redux'
import { saveComboItem } from '../actions/comboBoxActions'

const ComboBox = ({dispatch}) => {
  return (
    <form> 
      <select name="liga" size="5">
        <option>first</option>
        <option>second</option>
      </select>
      <button 
        onClick={() => {dispatch(saveComboItem())}}
        >Abschicken</button>
    </form>
  )
}

export default connect(null, null)(ComboBox)
