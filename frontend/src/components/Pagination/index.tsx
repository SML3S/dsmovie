import{ ReactComponent as Arrow } from 'assets/img/arrow.svg'
import Listing from 'pages/Listing';
import './styles.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Pagination(MoviePage : any){
    var numero = MoviePage.number +1;
   // numero+=1;

    function  controlArrow( number: any){
        if(number > 1)
            return false;       
            return true;        
    }
//{score > 0 ? score.toFixed(1) : '-'}
    
    return (
        <div className="dsmovie-pagination-container">
    <div className="dsmovie-pagination-box">
       
    <Link to={`/${numero === 1 ? 0 : numero -2} `} >
        <button className="dsmovie-pagination-button"  disabled={numero === 1 ? true : false} >
        
            <Arrow/>
                      
        </button>
        </Link>  

        <p>{`${numero} de ${MoviePage.totalPages}`}</p>
      
       <button  className="dsmovie-pagination-button" disabled={numero === MoviePage.totalPages  ? true : false}>
       <Link to={`/${numero === MoviePage.totalPages  ? MoviePage.totalPages -1 : numero}`} >
            <Arrow className="dsmovie-flip-horizontal"/>
            </Link>
        </button>
      
        
       
    </div>
</div>

    );
}

export default Pagination;


