import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getWeather } from '../actions/weatherActions'

class Weather extends Component {

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):

        const { city } = this.props

        if (city !== prevProps.city) {
            this.props.getWeather(city.Key);
        }
    }

    render() {

        if (this.props.weather) {
            const { DailyForecasts } = this.props.weather

            return (
                <div className="d-flex justify-content-center">
                    {DailyForecasts.map(forecast => (
                        <div className="card">
                            <img src="https://via.placeholder.com/400x300" className="card-img-top" />
                            <div className="card-body text-uppercase text-center">
                                <h5 className="my-3">City name</h5>
                                <div className="my-3">Weather condition</div>
                                <div className="display-4 my-4">
                                    <span>{forecast.Temperature.Maximum.Value}</span>
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
            console.log("Nothing to see here.")
            return (
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" />
                        <div className="card-body text-uppercase text-center">
                            <h5 className="my-3">City name</h5>
                            <div className="my-3">Weather condition</div>
                            <div className="display-4 my-4">
                                <span>temp</span>
                                <span>&deg;C</span>
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
