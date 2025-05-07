import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "John Wick", release_date: "2014" },
    { id: 2, title: "The Godfather", release_date: "1972" },
    { id: 3, title: "Pulp Fiction", release_date: "1994" },
    { id: 4, title: "The Shawshank Redemption", release_date: "1994" },
    { id: 5, title: "Casablanca", release_date: "1942" },
    { id: 6, title: "The Dark Knight", release_date: "2008" },
    { id: 7, title: "Forrest Gump", release_date: "1994" },
    { id: 8, title: "Schindler's List", release_date: "1993" },
    { id: 9, title: "Fight Club", release_date: "1999" },
    { id: 10, title: "The Matrix", release_date: "1999" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("-----");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
