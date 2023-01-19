import React, { createContext, useState } from "react";
import "./App.css";
import { MovieForm } from "./component/MovieForm";
import { MovieListComponent } from "./component/MovieListComponent";
import { SearchComponent } from "./component/SearchComponent";
export const MovieContext = createContext({} as any);
type MovieTypes = {
  name: string;
  ratings: string;
  duration: string;
}[];
function App() {
  const [MovieDetails, setMovieDetails] = useState<MovieTypes>([]);
  return (
    <MovieContext.Provider value={{ MovieDetails, setMovieDetails }}>
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
