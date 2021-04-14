import React from "react";
import PropTypes from "prop-types";

//main component clock
export function Counter({ units, tens, hundreds, thousands }) {
	return (
		<>
			<div className="counter">
				<div className="digit">
					<p>
						<i className="far fa-clock"></i>
					</p>
				</div>
				<div className="digit">
					<p>{thousands}</p>
				</div>
				<div className="digit">
					<p>{hundreds}</p>
				</div>
				<div className="digit">
					<p>{tens}</p>
				</div>
				<div className="digit">
					<p>{units}</p>
				</div>
			</div>
		</>
	);
}

// declaring prop types
Counter.propTypes = {
	units: PropTypes.number,
	tens: PropTypes.number,
	hundreds: PropTypes.number,
	thousands: PropTypes.number
};
