import React from 'react'

const WeatherDetails = ({ timeOfDay, icon, city, text, temperature }) => {

    const displayIcon = text ? (
        <div className="icon bg-light mx-auto text-center" style={{ height: "100px", backgroundImage: 'url(' + require(`../images/icons/${icon}.svg`) + ')' }}>

        </div>
    ) : (<div></div>)

    return (
        <div className="d-flex justify-content-center mb-3">
            <div className="card">
                <img src={timeOfDay} alt="" className="card-img-top" />
                {displayIcon}
                <div className="card-body text-uppercase text-center">
                    <h5 className="my-3">{city}</h5>
                    <div className="my-3">{text}</div>
                    <div className="display-4 my-4">
                        <span>{temperature}</span>
                        <span>&deg;C</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails

