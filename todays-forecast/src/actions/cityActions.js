import { GET_CITY } from './types'

const key = 'fJhNzJgNpHjYKGFAvXAu2am55dOwrsg2'

export const getCity = (city) => (dispatch) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`
    fetch(base + query)
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_CITY,
            data
        }))
}