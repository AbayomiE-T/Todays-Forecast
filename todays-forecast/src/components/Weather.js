import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { getCurrConditions, getForecast } from '../actions/weatherActions'
import Day from '../images/day.svg'
import Night from '../images/night.svg'
import WeatherDetails from './WeatherDetails'

class Weather extends Component {

    componentDidUpdate(prevProps) {

        const { city } = this.props

        if (city !== prevProps.city) {
            this.props.getCurrConditions(city.Key)
            this.props.getForecast(city.Key);
        }
    }

    toCelcius(tempStr) {

        const temp = parseInt(tempStr)
        return Math.round((temp - 32) * 5 / 9)

    }

    returnDay(index) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        if (index === 7) {
            index -= 7
        }
        else if (index > 7) {
            index -= 7
        }

        return days[index]
    }

    render() {
        const { city } = this.props
        if (this.props.weather && this.props.forecast) {
            const { DailyForecasts } = this.props.forecast
            const { WeatherText, Temperature, IsDayTime, WeatherIcon } = this.props.weather

            let id = 0

            let image = IsDayTime ? Day : Night

            const date = new Date()
            let index = date.getDay()
            const temperature = this.toCelcius(Temperature.Imperial.Value)

            return (
                <Fragment>
                    <div className="text-uppercase text-center display-4 mb-3">Current condition</div>

                    <WeatherDetails
                        timeOfDay={image}
                        icon={WeatherIcon}
                        city={city.EnglishName}
                        text={WeatherText}
                        temperature={temperature}
                    />

                    <div className="text-uppercase text-center display-4 mb-5">5 day forecast</div>
                    <div className="d-flex flex-column justify-content-between align-items-center">
                        {DailyForecasts.map(forecast => (
                            <div className="card py-3 c-card d-block" key={id++}>
                                <div className="text-uppercase text-center display-4 size">{this.returnDay(index++)}</div>
                                <div className="display-4 size">
                                    <span>{this.toCelcius(forecast.Temperature.Maximum.Value)}</span>
                                    <span>&deg;C</span>
                                    <span className="low">{this.toCelcius(forecast.Temperature.Minimum.Value)}</span>
                                    <span className="low">&deg;C</span>
                                </div>
                                <div className="c-icon bg-light text-center" style={{ backgroundImage: 'url(' + require(`../images/icons/${forecast.Day.Icon}.svg`) + ')' }}></div>
                            </div>
                        ))

                        }
                    </div>
                </Fragment>
            )
        }

        else {
            return (
                <WeatherDetails
                    timeOfDay="https://via.placeholder.com/400x300"
                    icon=""
                    city="City Name"
                    text=""
                    temperature="Temp"
                />
            )
        }
    }
}

const mapStateToProps = state => ({
    weather: state.weather.weather,
    forecast: state.weather.forecast
})

export default connect(mapStateToProps, { getCurrConditions, getForecast })(Weather)
