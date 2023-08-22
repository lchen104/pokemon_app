import React from 'react'

const Show = ({pokemon}) => {
    
    const myStyle = {
        fontFamily: 'sans-serif',
        color: '#fff',
        backgroundColor: '#000',
        textAlign: 'center',
        padding: '10px'
      };

      const myDiv = {
        // display: 'flex',
        // border: '1px solid black',
        textAlign: 'center',
        backgroundColor: 'white',
      }

      const img = {
        border: '25px solid hotpink',
        margin: '10px',
        borderRadius: '25px',
        padding: '20px'
      }

      const nav = {
        textAlign: 'center',
      }

    return (
        <>
            <div style={myDiv}>
                <h1 style={myStyle}>Gotta Catch 'Em All!</h1>
                    <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
                    <img style={img} src={pokemon.img + '.jpg'} alt={pokemon.name} />
                    <h2>{pokemon.readyToFight ? 'Ready to FIGHT!' : 'Cowards away...!'}</h2>
            </div>
            <nav style={nav}>
                <h2><a href={`/pokemon`}> Go Back </a></h2>
            </nav>
        </>
    )
}

export default Show