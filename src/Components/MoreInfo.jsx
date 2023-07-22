import React from "react";

const MoreInfo = ({ weatherData }) => {
  const sunriseTimestamp = weatherData?.sys?.sunrise * 1000;
  const sunsetTimestamp = weatherData?.sys?.sunset * 1000;

  const sunriseDate = new Date(sunriseTimestamp);
  const sunsetDate = new Date(sunsetTimestamp);

  const sunriseTime = sunriseDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunsetTime = sunsetDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-white dark:bg-slate-800 rounded-md shadow-md p-4">
      <div className="text-center text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        {weatherData.name}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
          <div className="text-xs text-gray-600 dark:text-gray-400">Max Temp</div>
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {weatherData?.main?.temp_max}
            <sup>&#176;c</sup>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
          <div className="text-xs text-gray-600 dark:text-gray-400">Min Temp</div>
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {weatherData?.main?.temp_min}
            <sup>&#176;c</sup>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
          <div className="text-xs text-gray-600 dark:text-gray-400">Speed</div>
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {weatherData?.wind?.speed} m/s
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
          <div className="text-xs text-gray-600 dark:text-gray-400">Degree</div>
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {weatherData?.wind?.deg}&#176;
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
          <div className="text-xs text-gray-600 dark:text-gray-400">Sunrise</div>
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {sunriseTime}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
          <div className="text-xs text-gray-600 dark:text-gray-400">Sunset</div>
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {sunsetTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
