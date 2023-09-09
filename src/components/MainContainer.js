import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

export const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  //   console.log(movies, " movies");
  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  //   console.log(original_title, " oooooriginal_title");
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
