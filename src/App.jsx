import { useState, useEffect } from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import MovieList from "./component/MovieList";
import MovieSearch from "./component/MovieSearch";
import { MovieProvider } from "./context/MovieProvide";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [searchData, setSearchData] = useState([]);


  const handleSearch = async (value) => {

      const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          // Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGFkNGNlOTI5YzNlNmM4MjgxOTUyMWM1ZjE4Njk5MiIsIm5iZiI6MTc1NDU4MzgwNy4xNjgsInN1YiI6IjY4OTRkMmZmNTI4YTExM2NhMGEzMmNiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9FHG6N85opQLDWf-c0YaQ51EymUkF1QeNer8X2_auoA',
        },
      };
      if (value === "") return setSearchData([]);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setSearchData(data.results);
     } catch (error) {
      console.error("Failed to search movies:", error);
    }
  };

  useEffect(() => {
    const fetchMoviews = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovies(data1.results);
      setMovieRate(data2.results);
    };
    fetchMoviews();
  }, []);

  return (
    <>
    <MovieProvider>
      <div className="bg-black pb-10">
      <Header onSearch={handleSearch} />
      <Banner />
      {searchData.length > 0 ? (
        <MovieSearch title={"Kết quả tìm kiếm"} data={searchData} />
      ) : (
        <>
          <MovieList title={"Phim mới"} data={movies} />
          <MovieList title={"Phim đánh giá cao"} data={movieRate} />
        </>
      )}
      </div>
    </MovieProvider>
      
    </>
  
  );
}

export default App;
