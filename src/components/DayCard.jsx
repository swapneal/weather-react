import React from 'react';
let moment = require('moment');

const DayCard = ({ reading }) => {
	let newDate = new Date();
	const weekday = reading.dt * 1000;
	newDate.setTime(weekday);

	const imgURL = `owf owf-${reading.weather[0].id} owf-5x owf-pull-center`;

	return (
		<div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
			<div className="card forecast mw-100 h-100">
				<h3 className="card-title text-center">{moment(newDate).format('dddd')}</h3>
				<p className="text-center">{moment(newDate).format('MMMM Do, h:mm a')}</p>
				<i className={imgURL}></i>
				<div className="card-body">
					<h2 className="text-center">{Math.round(reading.main.temp)} °C</h2>
					<p className="card-text text-center text-capitalize">{reading.weather[0].description}</p>
				</div>
			</div>
		</div>
	);
};

export default DayCard;
