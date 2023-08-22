import React from 'react'

const New = ({pokedex}) => {

  const IMG_URL = 'https://img.pokemondb.net/artwork/'

  const container = {
    border: '1px solid black',
    textAlign: 'center',
    width: '100%',
    height: '98vh',
    margin: '0px,',
    padding: '0px',
    backgroundImage: 'url("../pokemon-bg.jpeg")'
}

const content = {
  fontFamily: 'sans-serif',
  border: '1px solid black',
  textAlign: 'center',
  backgroundColor: 'black',
  color: 'white'
}

const h1 = {
  fontFamily: 'sans-serif',
  // border: '1px solid black',
  // textAlign: 'center',
  // backgroundColor: 'black',
  color: 'white'
}

const nav = {
  textAlign: 'center',
}

const myInput = {
      margin: '5px',
      width: '300px',
      // border: '1px solid black',
      padding: '5px'
}


  return (
    <div style={container}>
      <div style={content}>
          <h1 style={h1}>New Pokemon page</h1>
      </div>
      
        <nav style={nav}>
            <h2>
              <a href="/" alt="">Home</a> | <a href="/pokemon" alt="List Pokemon">List Pokemon</a> | <a href="/pokemon/new" alt="Add Pokemon">Create Pokemon</a>
            </h2>
        </nav>
          
          {/* NOTE: action will be the route, method will be the HTTP verb */}
          <form action="/pokemon" method="POST">
            {/* <label>Name</label>
              <input style={myInput} type="text" name="name" /><br/> */}
              <label>Create a NEW Pokemon</label><br />
              <select style={myInput} name="name">
                {
                  pokedex.map((poke, i) => (
                    <option key={i} value={poke.slug}>{poke.name}</option>
                  ))
                }
              </select><br />

            {/* <label>Image</label> */}
              {/* <input style={myInput} type="text" name="img" value={IMG_URL} /><br/> */}
              Ready To Fight: <input type="checkbox" name="readyToFight" /><br/>
              <input style={myInput} type="submit" name="" value="Create Pokemon"/>
          </form>
    </div>
  )
}

module.exports = New