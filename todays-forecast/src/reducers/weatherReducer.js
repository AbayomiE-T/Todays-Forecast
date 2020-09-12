import { GET_WEATHER } from '../actions/types'

const initialState = {
    weather: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER:

            return {
                ...state,
                weather: action.data
            }
        default:
            return state;
    }
}