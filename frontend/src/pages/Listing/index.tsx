import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import {Movie}  from "components/Movie"
import * as api from "services/Endpoints";
import React, { useState, useEffect } from "react";



function Listing() {

 const movie: Movie = {
     id:0,
     title:"",
     score: 0,
     count: 0,
     image:""
 };
    
    const  [movies, setMovie] = useState([movie]);

    useEffect(() => {
        api.getAll("/movies")
        .then(response => {
            console.log(response.data)
            setMovie(response.data.content)
            console.log(response.data.content)
        })         
           
        .catch(e => {
            console.log(e);
        });  
    },[]);

   
  return (
    <>
        <Pagination/>
            <div className="container">
                <div   className="row">
                    { movies.map(movie => (
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard id={movie.id} title={movie.title} score={movie.score} count={movie.count} image={movie.image}/>
                        </div>
                    ))} 
                </div>
            </div>
     
    </>

);
}      
     

export default Listing;