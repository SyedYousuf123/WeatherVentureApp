import React, { useRef } from "react";

const NavBar = ({ search, toggleSearch, GetWeatherData }) => {
  const InputData = useRef();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      GetWeatherData();
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 space-y-4 md:space-y-0">
      <input
        ref={InputData}
        value={search}
        onChange={() => toggleSearch(InputData.current.value)}
        onKeyPress={handleKeyPress} // Add the keyPress event listener here
        className="capitalize bg-transparent border-none mr-0 md:mr-3 px-4 py-2 text-sm leading-tight focus:outline-none w-full md:w-auto rounded-md"
        type="text"
        placeholder="City name here"
      />
      <button
        onSubmit={GetWeatherData}
        onClick={GetWeatherData}
        type="submit"
        className="leading-tight text-sm bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ease-in-out"
      >
        Search
      </button>
    </div>
  );
};

export default NavBar;
