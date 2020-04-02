import { createStore } from 'redux'
import {country} from './reducer'

const store = createStore(country)

export default store