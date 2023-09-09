import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black w-1/2 grid grid-cols-12">
        <input
          className="col-span-9 p-4 m-4"
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button className="col-span-3 text-white py-2 px-4 m-4 bg-red-400 rounded-lg">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
