import { SAVE_COMBO_BOX_ITEM } from './types.js'

export const saveComboItem = (comboBoxItem) => {
  console.log('hit reducer')
  return {
    type: SAVE_COMBO_BOX_ITEM,
    comboBoxItem
  }
}
