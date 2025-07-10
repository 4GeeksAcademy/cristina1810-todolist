import React from "react";
import MainContainer from "./MainContainer";

//create your first component
const Home = () => {
	return (
		<div className="">
			<div className="m-5 text-center"><h1>Lista de tareas</h1>
			</div>
			<MainContainer/>
		</div>
	);
};

export default Home;