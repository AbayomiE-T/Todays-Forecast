import { GET_CITY, GET_WEATHER } from '../actions/types'

const initialState = {
    city: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CITY:

            return {
                ...state,
                city: action.data
            }
        default:
            return state;
    }
}