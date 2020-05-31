import React, { useState } from 'react';
import './styles.css';

import { API_KEY } from '../config/keys';
import CurrentWeather from './CurrentWeather';
import { ForecastWeather } from './ForecastWeather';

const api = {
	key: process.env.API_KEY || API_KEY,
	base: `https://api.openweathermap.org/data/2.5/`,
};

const Weather = () => {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState('');
	const [dailyData, setDailyData] = useState([]);
	const [forecast, setForecast] = useState([]);

	const search = (event) => {
		if (event.key === 'Enter') {
			fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
				.then((res) => res.json())
				.then((result) => {
					setWeather(result);
					setQuery('');
				});

			fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
				.then((res) => res.json())
				.then((result) => {
					setDailyData(result.list.filter((reading) => reading.dt_txt.includes('18:00:00')));
					setForecast(result.list);
					console.log(result.list);
				});
		}
	};

	return (
		<main className="app">
			<div className="search-box">
				<input
					type="text"
					className="search-bar"
					placeholder="Enter City.."
					onChange={(e) => setQuery(e.target.value)}
					value={query}
					onKeyPress={search}
				/>
			</div>
			<CurrentWeather weather={weather} />
			<ForecastWeather forecast={forecast} dailyData={dailyData} />
		</main>
	);
};

export default Weather;
