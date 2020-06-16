import React, { Component } from 'react'
import movieTrailer from 'movie-trailer'
import {
    Link,
  } from "react-router-dom";
  
const CONFIG =  {
    API_KEY_OMDB : '27e5695c',
    URL_API_OMDB : 'http://www.omdbapi.com/?apikey',
}

export class DetailMovie extends Component {

    state = { id:0, movie: {}, trailerId: '' }


componentDidMount() {
    const { id } = this.props.match.params
    this.setState({id})
    this.GetById({id})
    
}

GetById =  ({id}) => {
    fetch(`${CONFIG.URL_API_OMDB}=${CONFIG.API_KEY_OMDB}&i=${id}`)
    .then(res=> res.json())
    .then(movie => {
        console.log(movie)
        this.setState( {movie })
        this.GetTrailer(this.state.movie.Title)
    })
}

GetTrailer = (name) => {
    movieTrailer( name, { id: true, multi: false} )
    .then( youTubeTrailerId => { 
        let url = `https://www.youtube.com/embed/${youTubeTrailerId}`
        this.setState( {trailerId: url }) 
      }).catch( console.error)
}

    render() {
        return (
            <div>
                  
                <div className="container">
                  <div className="notification">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src={this.state.movie.Poster} alt="Placeholder " />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                        <img src={this.state.movie.Poster} alt="Placeholder " />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">Director:  {this.state.movie.Director}</p>
                                        <p className="subtitle is-6">Genre: {this.state.movie.Genre}</p>
                                        <p className="subtitle is-6">Language: {this.state.movie.Language}</p>
                                    </div>
                                </div>

                                <div className="content">
                                   <p> <strong>Actors:  </strong> {this.state.movie.Actors} </p>
                                   <p> <strong>Awards:  </strong> {this.state.movie.Awards} </p>
                                </div>
                                <div className="content">
                                        <iframe title="you vi" width="420" height="315"
                                            src={this.state.trailerId}>
                                        </iframe> 
                                </div>
                                <div className="content">
                                   <p className="button is-primary">  <strong>Redirect to: => </strong> <Link to='/'  >  search home page </Link>  </p>
                                </div>
                             
                          </div>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}
