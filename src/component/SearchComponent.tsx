import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../App";
export const SearchComponent = () => {
  const data = useContext(MovieContext);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [flag, setFlag] = useState(false);
  let searchedArr: any = [];
  //  useEffect Hook used to show complete list while it is not searching
  useEffect(() => {
    if (inputSearch.length === 0 && flag === true) {
      data.setMovieDetails(data.TempMovieDetails);
      setFlag(false);
    }
  }, [data.TempMovieDetails, data, flag, inputSearch]);
  //  function to search movies
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let temp = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setInputSearch(temp);
    if (temp.length >= 2) {
      if (data.MovieDetails.length === 0) {
        alert("Add Some Movies !!");
      } else {
        for (let i = 0; i < data.MovieDetails.length; i++) {
          if (data.MovieDetails[i].name.startsWith(temp) === true) {
            searchedArr.push(data.MovieDetails[i]);
            setFlag(true);
          }
        }
        data.setMovieDetails(searchedArr);
      }
    }
  };
  return (
    <div className="input-group mb-3" style={{ width: "150%" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onChange={handleSearch}
      />
    </div>
  );
};
