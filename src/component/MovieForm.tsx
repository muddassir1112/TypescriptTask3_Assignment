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
    let durationRegex = /^[0-9]?.?[0-9]hr$/i;
    // Validation on form
    if (nameRef.current.value === "") {
      alert("Please Add Name");
    } else if (
      ratingRef.current.value === "" ||
      parseInt(ratingRef.current.value) > 100 ||
      parseInt(ratingRef.current.value) < 1
    ) {
      alert("Please Enter Ratings Between 1-100");
    } else if (durationRef.current.value === "") {
      alert("Please Enter Duration");
    } else if (durationRef.current.value !== "") {
      if (durationRegex.test(durationRef.current.value) === false) {
        alert("Please Enter Duration in hour(Eg. 2.5hr)");
      } else {
        let obj = {
          durationSort: Number(durationRef.current.value.slice(0, -2)),
          name:
            nameRef.current.value.charAt(0).toUpperCase() +
            nameRef.current.value.slice(1),
          ratings: Number(ratingRef.current.value),
          duration: durationRef.current.value,
        };
        data.setMovieDetails([...data.MovieDetails, obj]);
        data.setTempMovieDetails([...data.TempMovieDetails, obj]);
        nameRef.current.focus();
        nameRef.current.value = "";
        ratingRef.current.value = "";
        durationRef.current.value = "";
      }
    }
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
          <label>Duration(min/hrs)</label>
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
