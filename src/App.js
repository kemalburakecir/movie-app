import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=9f3a8a29";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search,setSearch] = useState('');

    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className=" app">
      <h1>Movie Finder</h1>
      <div className="search">
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(search)}
         />
      </div>

      {
        movies?.length > 0 
        ? (
            <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        ) : (
            <div className="empty">
                <h2> No movies found </h2>
            </div>
        )
    }
    </div>
  );
}

export default App;
