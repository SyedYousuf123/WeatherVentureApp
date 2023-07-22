import { useState } from "react";
import MainWeather from "./Components/MainWeather";
import MoreInfo from "./Components/MoreInfo";
import NavBar from "./Components/NavBar";
import axios from "axios";

function App() {
	const [search, setSearch] = useState("");
	const [weather, setWeather] = useState([]);
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bbee6324fba6078bf932d86a96f4b69c`;

	
	const toggleSearch = (value) => {
		setSearch(value);
	};
	const GetWeatherData = () => {
		if (search !== "") {
			axios
				.get(URL)
				.then((res) => {
					setWeather(res.data);
					console.log(res.data)
				})
				.catch((err) => err);
		}
	};
	return (
		<div className="text-white rounded-sm w-full md:w-[50%] mx-auto shadow-md h-fit bg-gradient-to-r from-gray-700 via-gray-900 to-black">
  <h1 className="text-5xl py-6 text-center font-semibold">Weather</h1>
  <NavBar
    search={search}
    toggleSearch={toggleSearch}
    GetWeatherData={GetWeatherData}
  />
  <MainWeather weatherData={weather} />
  <MoreInfo weatherData={weather}/>
</div>

	);
};

export default App;
