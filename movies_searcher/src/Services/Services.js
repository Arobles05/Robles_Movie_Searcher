const CONFIG =  {
    API_KEY_OMDB : '27e5695c',
    URL_API_OMDB : 'http://www.omdbapi.com/?apikey=',
}
const movieService = {}
 movieService.export = {
    GetByName : function (inputMovie)  {
        fetch(`${CONFIG.URL_API_OMDB}=${CONFIG.API_KEY_OMDB}&s=${inputMovie}`)
            .then(res=>res.json())
                .then(result => {
                     const { Search, totalResults } = result
                     this.props.onResults(Search)
                     console.log({Search, totalResults})
                     return result
      })
    },
}


movieService.GetById = function (id){
    fetch(`${CONFIG.URL_API_OMDB}=${CONFIG.API_KEY_OMDB}&i=${id}`)
    .then(res=> res.json())
    .then(movie => {
        return movie
    })
}

export default movieService
