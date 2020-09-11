import { combineReducers } from 'redux'
import cityReducer from './cityReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
    city: cityReducer,
    weather: weatherReducer
})