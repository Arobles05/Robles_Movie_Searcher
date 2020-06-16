import React, { Component } from 'react'

export class MovieCard extends Component{
 
    render () {
        const { Movie  } = this.props
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={Movie.Poster} 
                         alt="Placeholder "></img>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-5">Movie:  {Movie.Title}</p>
                            <p className="subtitle is-6">Type: {Movie.Type}</p>
                        </div>
                    </div>

                    <div className="content">
                         Year: {Movie.Year}
                    </div>
                    <div className="content">
                        <a href="/some/valid/uri">Trailer </a>
                    </div>
                    <br></br>
                </div>
            </div>
        )
    }
}