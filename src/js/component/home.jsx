import React, { useState}  from "react";

const Home = () => {
	const [selectedLight, setSelectedLight] = useState(null);

	const handleLightClick = (light) => {
	  setSelectedLight(light);
	};

	return (
		<div >
			<div id="trafficTop"></div>
			<div id="container">
				<div className={`redLight ${selectedLight === "red"? "selected":""}`}
				onClick={()=> handleLightClick("red")}>
				</div>
				<div className={`yellowLight ${selectedLight === "red"? "selected":""}`}
				onClick={()=> handleLightClick("red")}>
				</div>
				<div className="greenLight"></div>
			</div>
			
		</div>
	);
};

export default Home;
