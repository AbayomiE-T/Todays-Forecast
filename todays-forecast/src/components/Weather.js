import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { getCurrConditions, getForecast } from '../actions/weatherActions'
import Day from '../images/day.svg'
import Night from '../images/night.svg'

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
            return (
                <Fragment>
                    <div className="text-uppercase text-center display-4 mb-3">Current condition</div>
                    <div className="d-flex justify-content-center mb-3">
                        <div className="card">
                            <img src={image} alt="" className="card-img-top" />
                            <div className="icon bg-light mx-auto text-center" style={{ height: "100px", backgroundImage: 'url(' + require(`../images/icons/${WeatherIcon}.svg`) + ')' }}>

                            </div>
                            <div className="card-body text-uppercase text-center">
                                <h5 className="my-3">{city.EnglishName}</h5>
                                <div className="my-3">{WeatherText}</div>
                                <div className="display-4 my-4">
                                    <span>{this.toCelcius(Temperature.Imperial.Value)}</span>
                                    <span>&deg;C</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-uppercase text-center display-4 mb-5">5 day forecast</div>
                    <div className="d-flex justify-content-between">
                        {DailyForecasts.map(forecast => (
                            <div className="card" key={id++}>
                                <div className="text-uppercase text-center display-4 mb-5">{this.returnDay(index++)}</div>
                                <div className="icon bg-light mx-auto text-center" style={{ height: "100px", backgroundImage: 'url(' + require(`../images/icons/${forecast.Day.Icon}.svg`) + ')' }}></div>
                                <div className="card-body text-uppercase text-center">
                                    <div className="my-3">{forecast.Day.IconPhrase}</div>
                                    <div className="display-4 my-4">
                                        <span>Max: {this.toCelcius(forecast.Temperature.Maximum.Value)}</span>
                                        <span>&deg;C</span><br />
                                        <span>Min: {this.toCelcius(forecast.Temperature.Minimum.Value)}</span>
                                        <span>&deg;C</span>
                                    </div>
                                </div>
                            </div>
                        ))

                        }
                    </div>
                </Fragment>
            )
        }

        else {
            return (
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <img src="https://via.placeholder.com/400x300" alt="" className="card-img-top" />
                        <div className="card-body text-uppercase text-center">
                            <h5 className="my-3">City name</h5>
                            <div className="my-3">Weather condition</div>
                            <div className="display-4 my-4">
                                <span>temp</span>
                                <span>&deg;F</span>
                            </div>
                        </div>
                    </div>
                </div>
            )

        }
    }
}

const mapStateToProps = state => ({
    weather: state.weather.weather,
    forecast: state.weather.forecast
})

export default connect(mapStateToProps, { getCurrConditions, getForecast })(Weather)
