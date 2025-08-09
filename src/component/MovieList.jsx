import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useContext } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { MovieContext } from "../context/MovieProvide";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};


const MovieList = ({ title, data }) => {
  const { handleTraller } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {data?.map((movie) => (
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
      </Carousel>
    </div>
  );
};

export default MovieList;
