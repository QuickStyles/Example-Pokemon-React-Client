import React, { Component } from 'react';
import './index.css'

class PokemonShowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: {}
    }
  }

  componentDidMount() {
    // this.props.location is provided React-Router-DOM. The Link tag is passing the state value
    console.log(this.props.location.state)
    fetch(this.props.location.state).then(res => res.json())
      .then(payload => {
        this.setState((state) => {
          return {
            pokemon: payload
          }
        })
      })
  }

  render() {
    const { name, height } = this.state.pokemon;
    return(
      <div>
        { this.state.pokemon.id &&
          <div className='pokemon-container'>
            <h1>{ name }</h1>
            <div>
              <img src={this.state.pokemon.sprites.front_default}></img>
            </div>
            <div>Height: {height}</div>
          </div>
        }
      </div>
    )
  }
}

export default PokemonShowPage