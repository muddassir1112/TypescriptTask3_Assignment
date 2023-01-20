import React, { useContext, useEffect } from "react";
import { MovieContext } from "../App";

export const MovieListComponent = () => {
  // useEffect Hook is used
  const data = useContext(MovieContext);
  // useEffect Hook is used to set the data in temporary context state array
  useEffect(() => {
    data.MovieDetails.sort((a: any, b: any) => b.durationSort - a.durationSort)
    data.TempMovieDetails.sort((a: any, b: any) => b.durationSort - a.durationSort)
        data.setTempMovieDetails([...data.TempMovieDetails])
        data.setMovieDetails([...data.MovieDetails])
}, [data.MovieDetails])
  return (
    <div className="list_container">
      <table className="table table-striped table-hover">
        {data.MovieDetails.length > 0
          ? data.MovieDetails.map(
              (ele:any,index:number) => (
                <tbody key={index}>
                  <tr>
                    <th colSpan={10}>{ele.name}</th>
                  </tr>
                  <tr>
                    <td>Ratings : {ele.ratings}/100</td>
                    <td colSpan={10}>{ele.duration}</td>
                  </tr>
                </tbody>
              )
            )
          : null}
      </table>
    </div>
  );
};
