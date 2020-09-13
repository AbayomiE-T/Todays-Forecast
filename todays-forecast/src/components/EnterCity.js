import React, { Component, Fragment } from 'react'
import Weather from './Weather'
import { connect } from 'react-redux';
import { getCity } from '../actions/weatherActions'

class EnterCity extends Component {

    state = {
        city: ''
    }

    componentDidMount() {
        const city = localStorage.getItem('city')

        if (city) {
            this.props.getCity(city)
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault()

        const { city } = this.state;

        this.props.getCity(city.trim())

        localStorage.setItem('city', city)

        this.setState({
            city: ''
        })
    }

    render() {
        const { city } = this.state

        return (
            <Fragment>
                <div className="container">
                    <form className="text-center my-3" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="city">Enter a city for weather information</label>
                            <input type="text" className="form-control" id="city" onChange={this.handleChange} value={city} />
                        </div>
                    </form>
                </div>
                <Weather city={this.props.city} />
            </Fragment>

        )
    }
}

const mapStateToProps = state => ({
    city: state.city.city,
})

export default connect(mapStateToProps, { getCity })(EnterCity)
