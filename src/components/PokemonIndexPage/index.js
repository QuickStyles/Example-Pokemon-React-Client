import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexpage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon`).then(res => res.json())
      .then(payload => {
        this.setState((state) => {
          return {
            pokemons: payload.results
          }
        })
      })
  }

  render() {
    const pokemons = this.state.pokemons.map((pokemon, i) => {
      return(
        <Link key={i} to={{pathname: '/pokemon', state: pokemon.url}}>
          <div>
            <h1>{pokemon.name}</h1>
          </div>
        </Link>
      )
    })
    return(
      <main>
        {pokemons}
      </main>
    )
  }
}
export default PokemonIndexpage