import React from "react";
import { BACKGROUND } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="-z-10 absolute">
        <img src={BACKGROUND} alt="background" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GPTSearch;
