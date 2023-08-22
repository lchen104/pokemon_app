import React from 'react'

const Index = ({pokemon}) => {
    
    const h1 = {
        fontFamily: 'sans-serif',
        color: '#fff',
        backgroundColor: '#000',
        textAlign: 'center',
        // width: '800px',
        padding: '10px'
      };
    
    const main = {
      display: 'block',
      textAlign: 'center',
      // border: '1px solid black'
      backgroundImage: 'url("pokemon-bg.jpeg")',
      height: '98vh',
    }

    const container = {
      display: 'flex',
      // border: '1px solid black',
      textAlign: 'center',
      // width: '800px',
      // overflow: 'auto',
      flexWrap: 'wrap',
    }


    const card = {
      width: '200px',
      height: '250px',
      border: '10px solid lightgrey',
      borderRadius: '10px',
      margin: '5px',
      padding: '5px',
      display: 'inline-block',
      backgroundColor: 'white'
    }


    const img = {
      width: '150px'
    }

    const nav = {
      textAlign: 'center',
    }
    
    return (
        <div style={main}>
            {/* <h1 style={h1}>See All The Pokemon!</h1> */}
            <h1 style={h1}>You have {pokemon.length} { pokemon.length > 1 ? 'Pokemons' : 'Pokemon'}</h1>
            <nav style={nav}>
                <h2>
                  <a href="/" alt="">Home</a> | <a href="/pokemon" alt="List Pokemon">List Pokemon</a> | <a href="/pokemon/new" alt="Add Pokemon">Create Pokemon</a>
                </h2>
            </nav>
            <div style={container}>
                {
                    pokemon.map((poke, i) => (
                        <div style={card} key={i}>
                            <h2><a href={`/pokemon/${i}`}> {poke.name[0].toUpperCase() + poke.name.slice(1)} </a></h2>
                            <img style={img} src={poke.img + '.jpg'} alt={poke.name} />
                            {/* <h3>{poke.readyToFight ? 'Ready to FIGHT!' : 'Cowards away...!'}</h3> */}
                        </div>
                    )) 
                }
            </div>

        </div>
    )
}

export default Index