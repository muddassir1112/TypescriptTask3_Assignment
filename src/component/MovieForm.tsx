import React, { useContext, useRef } from "react";
import { MovieContext } from "../App";
export const MovieForm = () => {
  // useContext Hook is used
  const data = useContext(MovieContext);
  const nameRef = useRef<HTMLInputElement>(null!);
  const ratingRef = useRef<HTMLInputElement>(null!);
  const durationRef = useRef<HTMLInputElement>(null!);
  const handleAddMovie = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // regex for duration of movie
    let durationRegexHour = /^[0-9]?.?[0-9]h$/i;
    let durationRegexMin = /^[0-9]?.?[0-9]m$/i;
    let durationInHr = 0;
    let obj = {};
    // Validation on form
    if (
      nameRef.current.value === "" ||
      ratingRef.current.value === "" ||
      durationRef.current.value === ""
    ) {
      alert("Please Add Name");
      return;
    } else if (
      parseInt(ratingRef.current.value) > 100 ||
      parseInt(ratingRef.current.value) < 1
    ) {
      alert("Please Enter Ratings Between 1-100");
    } else if (durationRef.current.value === "") {
      alert("Please Enter Duration");
    } else if (
      (durationRef.current.value !== "" &&
        durationRegexHour.test(durationRef.current.value) === true) ||
      durationRegexMin.test(durationRef.current.value) === true
    ) {
      if (durationRef.current.value.includes("m")) {
        durationInHr = Number(durationRef.current.value.slice(0, -1)) / 60;
      } else if (durationRef.current.value.includes("h")) {
        durationInHr = Number(durationRef.current.value.slice(0, -1));
      }
      obj = {
        durationSort: durationInHr,
        name:
          nameRef.current.value.charAt(0).toUpperCase() +
          nameRef.current.value.slice(1),
        ratings: Number(ratingRef.current.value),
      };
      data.setMovieDetails([...data.MovieDetails, obj]);
      data.setTempMovieDetails([...data.TempMovieDetails, obj]);
      nameRef.current.focus();
      nameRef.current.value = "";
      ratingRef.current.value = "";
      durationRef.current.value = "";
    } else alert("Please Enter Duration in -> Eg. 2.5h or 2.5m ");
  };

  return (
    <div className="form_container">
      <form onSubmit={handleAddMovie}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Movie Name..."
            ref={nameRef}
          />
          <label>Movie Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ratings..."
            ref={ratingRef}
          />
          <label>Ratings(Out of/100)</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Duration"
            ref={durationRef}
          />
          <label>Duration(h)</label>
        </div>
        <input
          type="submit"
          value="  Add Movie"
          style={{ float: "right" }}
          className="btn btn-success"
        />
      </form>
    </div>
  );
};
