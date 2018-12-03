import { SAVE_COMBO_BOX_ITEM } from '../actions/types.js'

export const rootReducer = (state = {
  comboBoxItem: 'default' 
}, action ) => {
  switch (action.type) {
    case SAVE_COMBO_BOX_ITEM:
      const newState = {
        comboBoxItem: action.comboBoxItem
      }
      return { ...state, newState }
    default: 
      return state
  }
}