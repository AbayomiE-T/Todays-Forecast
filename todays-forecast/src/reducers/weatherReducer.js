import { GET_WEATHER, GET_FORECAST } from '../actions/types'

const initialState = {
    weather: null,
    forecast: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER:

            return {
                ...state,
                weather: action.data[0]
            }
        case GET_FORECAST:
            return {
                ...state,
                forecast: action.data
            }
        default:
            return state;
    }
}