import React from 'react'

const New = () => {

  const IMG_URL = 'https://img.pokemondb.net/artwork/'

  const myStyle = {
    color: '#fff',
    backgroundColor: '#000',
    textAlign: 'center'
  };

  const myInput = {
        margin: '3px'
  }

  return (
    <div>
        <h1 style={myStyle}>New Pokemon page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/pokemon" method="POST">
            Name: <input style={myInput} type="text" name="name" /><br/>
            Image: <input style={myInput} type="text" name="img" value={IMG_URL} /><br/>
            Is Ready To Fight: <input style={myInput} type="checkbox" name="readyToFight" /><br/>
            <input style={myInput} type="submit" name="" value="Create Pokemon"/>
        </form>

        <a href='https://www.pokemon.com/us/pokedex' alt='pokedex' target='_blank'>Pokedex</a>
    </div>
  )
}

module.exports = New