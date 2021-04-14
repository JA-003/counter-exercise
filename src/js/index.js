//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/Counter.js";

//render your react application

// initializing counter
let counter = 0;

setInterval(function() {
	const units = Math.floor((counter / 1) % 10);
	const tens = Math.floor((counter / 10) % 10);
	const hundreds = Math.floor((counter / 100) % 10);
	const thousands = Math.floor((counter / 1000) % 10);
	console.log(units, tens, hundreds, thousands);
	counter++;

	ReactDOM.render(
		<Counter
			units={units}
			tens={tens}
			hundreds={hundreds}
			thousands={thousands}
		/>,
		document.querySelector("#app")
	);
}, 50);
