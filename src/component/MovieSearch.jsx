import React from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { useContext } from "react";
import { MovieContext } from "../context/MovieProvide";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const MovieSearch = ({ title, data }) => {
    const {handleTraller} = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {data &&
          data.length > 0 &&
          data.map((movie) => (
            <div
              key={movie.id}
              className="w-[200px] h-[300px] relative group cursor-pointer"
              onClick={() => handleTraller(movie.id)}
            >
              <div className="group-hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-3 ">
                  <p className="uppercase text-md">
                    {movie.title || movie.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    
    </div>
  );
};

export default MovieSearch;
