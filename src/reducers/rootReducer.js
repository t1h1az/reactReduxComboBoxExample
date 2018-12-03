import { SAVE_COMBO_BOX_ITEM } from '../actions/types.js'

export const rootReducer = (state = {
  comboBoxItem: 'default' 
}, action ) => {
  switch (action.type) {
    case SAVE_COMBO_BOX_ITEM:
      return Object.assign({}, state, {comboBoxItem: action.comboBoxItem})
    default: 
      return state
  }
}