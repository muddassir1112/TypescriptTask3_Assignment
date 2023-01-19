import React, { useContext, useRef, useState } from "react";
import { MovieContext } from "../App";

export const MovieForm = () => {
  const data = useContext(MovieContext);
  const [movieName, setMovieName] = useState<string>("");
  const [ratings, setRatings] = useState<string>();
  const [duration, setDuration] = useState<any>("");
  const nameRef = useRef<HTMLInputElement>(null!);
  const ratingRef = useRef<HTMLInputElement>(null!);
  const durationRef = useRef<HTMLInputElement>(null!);
  const inputName = (e: React.FormEvent<HTMLInputElement>) => {
    setMovieName(nameRef.current.value);
  };
  const inputRating = (e: React.FormEvent<HTMLInputElement>) => {
    setRatings(ratingRef.current.value);
  };
  const inputduration = (e: React.FormEvent<HTMLInputElement>) => {
    setDuration(durationRef.current.value);
  };
  const handleAddMovie = () => {
    if (movieName === "" && ratings === "" && duration === "") {
      alert("All Fields Are Mandatory");
    } else if (movieName === "") {
      alert("Please Add Name");
    } else if (ratings === "") {
      alert("Please Enter Ratings ");
    } else if (duration === "" || !duration.includes("h")) {
      alert("Please Enter Duration hours (E.g.-> 2.5h)");
    } else {
      let obj = {
        name: movieName,
        ratings: Number(ratings),
        duration: duration,
      };
      data.MovieDetails.push(obj)
      data.setMovieDetails([...data.MovieDetails]);
    //   console.log(typeof obj.ratings);
    }
    console.log(data.MovieDetails);
  };

  return (
    <div className="form_container">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          //   id="floatingInput"
          placeholder="Enter Movie Name..."
          ref={nameRef}
          onChange={inputName}
        />
        <label>Movie Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          //   id="floatingPassword"
          placeholder="Ratings..."
          ref={ratingRef}
          onChange={inputRating}
        />
        <label>Ratings(Out of/100)</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          //   id="floatingPassword"
          placeholder="Duration"
          ref={durationRef}
          onChange={inputduration}
        />
        <label>Duration(min/hrs)</label>
      </div>
      <button
        type="button"
        style={{ float: "right" }}
        className="btn btn-success"
        onClick={handleAddMovie}
      >
        Add Movie
      </button>
    </div>
  );
};
