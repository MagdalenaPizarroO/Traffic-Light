import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div >
			<div id="trafficTop"></div>
			<div id="container">
				<div class="redLight"></div>
				<div class="yellowLight"></div>
				<div class="greenLight"></div>
			</div>
			
		</div>
	);
};

export default Home;
