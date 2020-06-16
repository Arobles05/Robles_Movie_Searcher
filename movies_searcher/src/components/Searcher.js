import React, { Component } from 'react'
const API_KEY_OMDB = '27e5695c'

export class Search extends Component{
    state = {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({inputMovie : e.target.value})
    }
    _handleSubmit = (e) => {
        e.preventDefault();

        const {inputMovie} = this.state
       
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY_OMDB}&s=${inputMovie}`)
             .then(res=>res.json())
               .then(result => {
                   const { Search, totalResults } = result
                   this.props.onResults(Search)
                   console.log({Search, totalResults})
               })
    }
    render () {
        return (
         <form onSubmit={this._handleSubmit} >
            <div className="field has-addons has-addons-centered">
                <div className="control ">
                    <input 
                     className="input is-primary"
                     onChange={this._handleChange}
                     type="text" 
                     placeholder="Find a movie"></input>
                </div>
                <div className="control">
                    <button className="button is-primary" >Search</button>
                </div>
            </div>
        </form>       
        )
    }
}