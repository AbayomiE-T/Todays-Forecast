import { GET_CITY } from '../actions/types'

const initialState = {
    city: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CITY:

            return {
                ...state,
                city: action.data[0]
            }
        default:
            return state;
    }
}