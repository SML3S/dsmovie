import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import {Movie}  from "components/Movie"
import { MoviePage } from "components/MoviePage";
import * as api from "services/Endpoints";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Listing() { 

const {number} = useParams(); 
const [pageNumber, setPageNumber] = useState(0);
useEffect(() => {
    if(number !== undefined){  
        console.log("ifelse useEffect");
        var n = parseInt(number);
        handlePageChange(n)
        buscarMovies(parseInt(number));
    }else{buscarMovies(pageNumber);}
    
},[number]);   


console.log("numero: "+number);
console.log("pageNumber 1: "+ pageNumber);
 const movie: Movie = {
     id:0,
     title:"",
     score: 0,
     count: 0,
     image:""
 };
 
 const  [movies, setMovie] = useState([movie]);
 
 const moviePage : MoviePage= {
    content: movies,
    last:false,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number: 0,
    first: false,
    numberOfElements: 0,
    empty: false
};
 const [moviePages, setMoviePage] = useState( moviePage );    

const handlePageChange = (newNumbre : number) => { 
        
       setPageNumber(newNumbre);
    };
    console.log("pageNumber 2: "+ pageNumber);

const buscarMovies = (pageNumber : number)=>{        
            //"/movies?page=2&size=10"
            api.getAll(`/movies?page=${pageNumber}&size=10`)
            .then(response => {
                console.log(response.data)
                setMoviePage(response.data)
                setMovie(response.data.content)
               // setPageNumber(pageNumber + 1);
                
            })         
                
            .catch(e => {
                console.log(e);
            });  
        } ; 



  return (
    <>
        <Pagination number={pageNumber} totalPages={moviePages.totalPages}/>
            <div className="container">
                <div   className="row">
                    { movies.map((movie, i) => (
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" key={i}>
                                <MovieCard id={movie.id} title={movie.title} score={movie.score} count={movie.count} image={movie.image}  />
                        </div>
                    ))} 
                </div>
            </div>
     
    </>

);
}      
    

export default Listing;



