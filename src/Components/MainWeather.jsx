import React from "react";

const MainWeather = ({ weatherData }) => {
	const celsiusTemp = weatherData?.main?.temp - 273.15;
	return (
		// <div className="flex justify-around items-center mt-16 mb-16">
		// 	<div className="text-center my-auto">
		// 		<h2 className="text-4xl font-semibold mb-1 ">
		// 			<span className="text-teal-400 animate-pulse duration-200">
		// 				{celsiusTemp.toFixed(0)}
		// 			</span>
		// 			<sup className="animate-bounce duration-200">&#176;c</sup>{" "}
		// 		</h2>
		// 		<span className="text-sm font-semibold ">
					
		// 		</span>
		// 	</div>
		// 	<div className="text-sm font-semibold">
		// 		<div className="">
		// 			Humidity:{" "}
		// 			<span className="text-teal-400 animate-pulse duration-200">
		// 				{" "}
		// 				{weatherData?.main?.humidity}
		// 			</span>
		// 			%
		// 		</div>
		// 		<div className="">
		// 			Feels Like:{" "}
		// 			<span className="text-teal-400 animate-pulse duration-200">
		// 				{" "}
		// 				{weatherData?.main?.feels_like}
		// 			</span>
		// 			&#176;{" "}
		// 		</div>
		// 		<div className="">
		// 			Pressure:{" "}
		// 			<span className="text-teal-400 animate-pulse duration-200">
		// 				{" "}
		// 				{weatherData?.main?.pressure}
		// 			</span>{" "}
		// 			mb
		// 		</div>
		// 	</div>
		// </div>
		<div className="flex flex-col md:flex-row justify-around items-center mt-16 mb-16">
  <div className="text-center my-auto">
    <h2 className="text-6xl font-semibold mb-1">
      <span className="text-teal-400 animate-pulse duration-200">
        {celsiusTemp.toFixed(0)}
      </span>
      <sup className="animate-bounce duration-200">&#176;c</sup>{" "}
    </h2>
    <span className="text-lg font-semibold text-gray-600">
      {weatherData?.weather?.[0]?.description || 'Weather description'}
    </span>
  </div>
  <div className="text-lg font-semibold text-gray-600 mt-4 md:mt-0">
    <div className="mb-2">
      Humidity:{" "}
      <span className="text-teal-400 animate-pulse duration-200">
        {weatherData?.main?.humidity}%
      </span>
    </div>
    <div className="mb-2">
      Feels Like:{" "}
      <span className="text-teal-400 animate-pulse duration-200">
        {weatherData?.main?.feels_like}&#176;{" "}
      </span>
    </div>
    <div>
      Pressure:{" "}
      <span className="text-teal-400 animate-pulse duration-200">
        {weatherData?.main?.pressure} mb
      </span>
    </div>
  </div>
</div>

	);
};

export default MainWeather;
