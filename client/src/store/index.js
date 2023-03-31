import {createStore} from 'redux'
import {reducer} from '../redusers/index'
export const store = createStore(reducer)