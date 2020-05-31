import React from 'react';
import '../App.css';
import { ForecastWeather } from './ForecastWeather';
let moment = require('moment');

const CurrentWeather = ({ weather }) => {
	let newDate = new Date();
	const weekday = weather.dt * 1000;
	newDate.setTime(weekday);
	return (
		<>
			{typeof weather.main !== 'undefined' ? (
				<div>
					<div className="location-box">
						<div className="location">
							{weather.name}, {weather.sys.country}
						</div>
						<div className="date">{moment(newDate).format('MMMM Do, h:mm a')}</div>
					</div>
					<div className="weather-box">
						<div className="temp">{Math.round(weather.main.temp)}°C</div>
						<div className="weather">{weather.weather[0].main}</div>
					</div>
					<ForecastWeather />
				</div>
			) : null}
		</>
	);
};

export default CurrentWeather;
