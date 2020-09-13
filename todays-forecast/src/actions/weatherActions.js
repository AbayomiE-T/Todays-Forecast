import { GET_CITY, GET_WEATHER, GET_FORECAST } from './types'

const key = 'reAerjML3MdDx78k9FQzepXWePA07jJC'

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

export const getCurrConditions = (id) => (dispatch) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    fetch(base + query)
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_WEATHER,
            data
        }))
}

export const getForecast = (id) => (dispatch) => {
    const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
    const query = `${id}?apikey=${key}`

    fetch(base + query)
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_FORECAST,
            data
        }))
}