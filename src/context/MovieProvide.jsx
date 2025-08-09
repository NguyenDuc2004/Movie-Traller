import { createContext, useState, useEffect } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
const MovieContext = createContext();

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const MovieProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trallerKey, setTrailerKey] = useState("");

  const handleTraller = async (id) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
        //   Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGFkNGNlOTI5YzNlNmM4MjgxOTUyMWM1ZjE4Njk5MiIsIm5iZiI6MTc1NDU4MzgwNy4xNjgsInN1YiI6IjY4OTRkMmZmNTI4YTExM2NhMGEzMmNiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9FHG6N85opQLDWf-c0YaQ51EymUkF1QeNer8X2_auoA',
        },
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrailerKey(data.results[0]?.key);
      setModalIsOpen(true);
    } catch (error) {
      setModalIsOpen(false);
      console.error("Failed to fetch trailer:", error);
    }
  };

  return (
    <MovieContext.Provider value={{ handleTraller }}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
      >
        {trallerKey && (
          <div className="flex items-center justify-center mt-5">
            <YouTube videoId={trallerKey} opts={opts} />
          </div>
        )}
      </Modal>
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };

