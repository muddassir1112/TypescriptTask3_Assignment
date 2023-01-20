import React, { createContext, useState } from "react";
import "./App.css";
import { MovieForm } from "./component/MovieForm";
import { MovieListComponent } from "./component/MovieListComponent";
import { SearchComponent } from "./component/SearchComponent";
export const MovieContext = createContext({} as any);
type MovieTypes = {
  durationSort: number;
  name: string;
  ratings: string;
  duration: string;
}[];
function App() {
  const [MovieDetails, setMovieDetails] = useState<MovieTypes | []>([]);
  const [TempMovieDetails, setTempMovieDetails] = useState<MovieTypes | []>([]);
  return (
    <MovieContext.Provider
      value={{
        MovieDetails,
        setMovieDetails,
        TempMovieDetails,
        setTempMovieDetails,
      }}
    >
      <div className="container">
        <MovieForm />
        <div className="list_Search_container">
          <SearchComponent />
          <MovieListComponent />
        </div>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
