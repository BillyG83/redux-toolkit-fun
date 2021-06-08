import { createAction } from '@reduxjs/toolkit'
import * as actions from './actionTypes'

export const itemAdded = createAction(actions.ITEM_ADDDED)
export const itemRemoved = createAction(actions.ITEM_REMOVED)
export const itemComplete = createAction(actions.ITEM_COMPLETE)