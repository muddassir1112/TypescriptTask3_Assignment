import React, {  useContext, useState } from "react";
import { MovieContext } from "../App";
export const SearchComponent = () => {
  const data = useContext(MovieContext)
  let searchedArray:any = [];
  const [inputSearch, setInputSearch] = useState("")
  const [tempArr, setTempArr] = useState(data.MoviesDetails)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length > 2){
      let startsWithAlphabet = 
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      for(let i = 0; i<data.MoviesDetails.length; i++){
        // data.MoviesDetails[i].name = data.MoviesDetails[i].toLowerCase();
        if(tempArr[i].startsWithAlphabet(startsWithAlphabet)){
          searchedArray.push(tempArr[i])
        }
      }
      data.setMoviesDetails([...searchedArray])
    }else return
    
  }
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        // value={inputSearch}
        onChange={handleSearch}
      />
      {/* <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        <i className='fas fa-search'></i>
      </button> */}
    </div>
  );
};
