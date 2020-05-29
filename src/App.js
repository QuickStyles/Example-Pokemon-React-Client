import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import PokemonIndexPage from './components/PokemonIndexPage';
import PokemonShowPage from './components/PokemonShowPage';
import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <NavLink to='/pokemons'>Pokémons</NavLink>
        </div>
        <Route path='/pokemons' component={ PokemonIndexPage }/>
        <Route path='/pokemon' component={ PokemonShowPage }/>
      </BrowserRouter>
    )
  }
}

export default App;
