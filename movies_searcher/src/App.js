import React, { Component } from 'react';
import { 
        Switch,
        Route,
       } from 'react-router-dom'
import './App.css';
import 'bulma/css/bulma.css'
import { Home } from './Pages/Home';
import { DetailMovie } from './Pages/DetailMovie';
class App extends Component {

  render () { return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/detail/:id' component={ DetailMovie } />
      </Switch>
    </div>
  );
}
}

export default App;
