import React from 'react'

const New = () => {

  const IMG_URL = 'https://img.pokemondb.net/artwork/'

  const myStyle = {
    fontFamily: 'sans-serif',
    color: '#fff',
    backgroundColor: '#000',
    textAlign: 'center',
    padding: '10px'
  };

  const myInput = {
        margin: '5px',
        width: '300px',
        // border: '1px solid black',
        padding: '5px'
  }

  const myDiv = {
    // display: 'flex',
    // border: '1px solid black',
    textAlign: 'center',
    
  }

  return (
    <div style={myDiv}>
        <h1 style={myStyle}>New Pokemon page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/pokemon" method="POST">
          <label>Name</label>
            <input style={myInput} type="text" name="name" /><br/>
          <label>Image</label>
            {/* <input style={myInput} type="text" name="img" value={IMG_URL} /><br/> */}
            Is Ready To Fight: <input type="checkbox" name="readyToFight" /><br/>
            <input style={myInput} type="submit" name="" value="Create Pokemon"/>
        </form>

        <a href='https://www.pokemon.com/us/pokedex' alt='pokedex' target='_blank'>Pokedex</a>
    </div>
  )
}

module.exports = New