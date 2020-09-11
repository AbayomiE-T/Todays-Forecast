import React, { Component, Fragment } from 'react'
import Weather from './Weather'

class EnterCity extends Component {

    state = {
        city: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault()

        const { city } = this.state;

        console.log(city.trim())

        this.setState({
            city: ''
        })
    }

    render() {
        const { city } = this.state

        return (
            <Fragment>
                <form className="text-center my-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="city">Enter a city for weather information</label>
                        <input type="text" className="form-control" id="city" onChange={this.handleChange} value={city} />
                    </div>
                </form>
                <Weather />
            </Fragment>
        )
    }
}

export default EnterCity