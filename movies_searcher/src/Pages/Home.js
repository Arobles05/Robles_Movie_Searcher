import React, { Component } from 'react';
import { Header } from '../components/Header.js'
import { Search } from '../components/Searcher';
import { MoviesList } from  '../components/MoviesList.js'


export class Home extends Component {
state = { results: [] }

_handleResults =  (results) =>{
  this.setState({ results })
}
  render () { return (
    <div className="App">
       <Header>
          <h1 className="title"> Movies Searcher </h1>
          <h2 className="subtitle"> by A.Robles  </h2>
        </Header>
        <div className="Searcher-wrapper">
           <Search onResults={this._handleResults} />
        </div>
        <div className="Searcher-wrapper">
        </div>
        <div className="container results ">
              <div className=" columns is-multiline">
                { this.state.results === undefined || this.state.results.length === 0   
                ? <p>Sin Resultados</p>
                : <MoviesList listMovies={ this.state.results }  /> }
              </div>
        </div>
        
    </div>
  );
}
}

