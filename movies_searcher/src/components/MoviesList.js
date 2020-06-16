import React, {Component} from 'react'
import { MovieCard } from './Movie.js'
import {
  Link,
} from "react-router-dom";

export class MoviesList extends Component{

    render () {
        const { listMovies } = this.props
        return listMovies.map(movie=>{
            return (
               
                  <div key={movie.imdbID} className="column is-one-quarter">
                    <Link to={`/detail/${movie.imdbID}`} >
                      <MovieCard Movie = {movie} /> 
                      </Link>
                  </div> 
                
          )
        } )
    }
}