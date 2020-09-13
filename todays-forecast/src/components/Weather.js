import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getWeather } from '../actions/weatherActions'

class Weather extends Component {

    componentDidUpdate(prevProps) {

        const { city } = this.props

        if (city !== prevProps.city) {
            this.props.getWeather(city.Key);
        }
    }

    render() {
        const { city } = this.props
        if (this.props.weather) {
            const { DailyForecasts } = this.props.weather
            let id = 1
            return (
                <div className="d-flex justify-content-between">
                    {DailyForecasts.map(forecast => (
                        <div className="card" key={id++}>
                            <img src="https://via.placeholder.com/400x300" className="card-img-top" />
                            <div className="card-body text-uppercase text-center">
                                <h5 className="my-3">{city.LocalizedName}</h5>
                                <div className="my-3">Weather condition</div>
                                <div className="display-4 my-4">
                                    <span>Max: {forecast.Temperature.Maximum.Value}</span>
                                    <span>&deg;F</span><br /><br />
                                    <span>Min: {forecast.Temperature.Minimum.Value}</span>
                                    <span>&deg;F</span>
                                </div>
                            </div>
                        </div>
                    ))

                    }
                </div>
            )
        }

        else {
            return (
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" />
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
    weather: state.weather.weather
})

export default connect(mapStateToProps, { getWeather })(Weather)
