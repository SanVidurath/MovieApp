import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const movieNumber = 2;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Harry Potter", release_date: "2000" }} />
      ) : (
        <MovieCard movie={{ title: "LOTR", release_date: "2002" }} />
      )}
    </>
  );
}

export default App;
