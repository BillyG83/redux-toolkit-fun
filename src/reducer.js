import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actionTypes'

let lastId = 0

export const reducer = createReducer([], (builder) => {
    builder
      .addCase(actions.ITEM_ADDDED, (state, action) => {
        const newItem = {
            id: lastId > 0 ? lastId++ : 0,
            description: action.payload.description,
            resolved: false,
        }
        state.push(newItem)
      })
      .addCase(actions.ITEM_REMOVED, (state, action) => {
        return state.filter(item => item.id !== action.payload.id)
      })
      .addCase(actions.ITEM_COMPLETE, (state, action) => {
        const item = state[action.payload.id]
        item.resolved = !item.resolved
      })
    }
)
