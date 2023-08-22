import React from 'react'

const Show = ({pokemon, pokedex}) => {
    
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

  const img = {
    border: '25px solid hotpink',
    backgroundColor: 'white',
    margin: '10px',
    borderRadius: '25px',
    padding: '20px'
  }

  const card = {
    textAlign: 'center',
    display: 'inline-block',
    border: '10px solid lavender',
    backgroundColor: '#141414',
    color: '#fff',
    padding: '20px'
  }

  const span = {
    fontWeight: 'bold',
    color: 'orange'
  }

  const h2 = {
    background: 'lightgrey',
    display: 'inline-block',
    width: '200px',
    textAlign: 'center',
    padding: '10px',
    border: '2px solid #141414'
  }

    return (
        <>
            <div style={container}>
                <div style={content}>
                    <h1 style={h1}>Gotta Catch 'Em All!</h1>
                </div>
                
                <nav style={nav}>
                    <h2>
                      <a href="/" alt="">Home</a> | <a href="/pokemon" alt="List Pokemon">List Pokemon</a> | <a href="/pokemon/new" alt="Add Pokemon">Create Pokemon</a>
                    </h2>
                </nav>
                
                <div style={card}>
                <h2>{pokemon.readyToFight ? 'Ready to FIGHT!' : 'Cowards away...!'}</h2>
                  <img style={img} src={pokemon.img + '.jpg'} alt={pokemon.name} /><br/>
                    <span style={span}>Name:</span> {pokedex.name}<br/>
                    <span style={span}>Number:</span> {pokedex.number}<br/>
                    <span style={span}>Weight:</span> {pokedex.weight}<br/>
                    <span style={span}>Height: </span> {pokedex.height}<br/>

                    <span style={span}>Abilities: </span> {pokedex.abilities.map((ability, i) => {
                        return (ability + ', ')
                    })}<br/>
                    <span style={span}>Weakness </span> {pokedex.weakness.map((weak, i) => {
                        return (weak + ', ')
                    })}<br/>
                    <span style={span}>Type: </span> {pokedex.type.map((kind, i) => {
                        return (kind + ', ')
                    })}
                  
                </div><br/>



                
                <h2 style={h2}><a href={`/pokemon`}> Go Back </a></h2>
            </div>
        </>
    )
}

export default Show