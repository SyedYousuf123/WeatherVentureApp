import axios from "axios";
import React, { useEffect } from "react";

const Service = () => {
	const URL =
		"https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=f54e0474c3bc27114a5ed0fe674a9a24";
	useEffect(() => {
		axios.get(URL).then((res) => {
			console.log(res.data.main);
		});
	});
	return <div></div>;
};

export default Service;
