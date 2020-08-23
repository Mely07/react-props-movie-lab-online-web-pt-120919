import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(movie =>  
      <MovieCard title = {movie.title}
      MovieCard IMDBRating = {movie.IMDBRating}
      MovieCard genres = {movie.genres}
      MovieCard poster = {movie.poster}
      />
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}  ABOVE 
      </div>
    )
  }
}

