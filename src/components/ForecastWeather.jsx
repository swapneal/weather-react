import React from 'react';
import DayCard from './DayCard';

export const ForecastWeather = ({ dailyData, forecast }) => {
	const formatDayCards = () => {
		return dailyData.map((reading, index) => <DayCard reading={reading} key={index} />);
	};
	return (
		<>
			{forecast ? (
				<div className="container">
					<div className="row justify-content-center">{formatDayCards()}</div>
				</div>
			) : null}
		</>
	);
};
