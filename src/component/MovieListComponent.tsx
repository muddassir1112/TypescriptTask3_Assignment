import React, { useContext, useEffect } from "react";
import { MovieContext } from "../App";

export const MovieListComponent = () => {
  const data = useContext(MovieContext);
  // useEffect(()=>{
  //   data.MoviesDetails.sort(function(a:any,b:any){
  //     return data.setMoviesDetails(a.duration - b.duration)
  //   })
  // },[])
  return (
    <div className="list_container">
      <table className="table table-striped table-hover">
        {data.MovieDetails.length > 0
          ? data.MovieDetails.map(
              (ele: { name: string; ratings: number; duration: any },index:number) => (
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
