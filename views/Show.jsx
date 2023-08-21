import React from 'react'

const Show = ({pokemon}) => {
    
    const myStyle = {
        color: '#fff',
        backgroundColor: '#000',
        textAlign: 'center'
    };

    return (
        <div>
            <h1 style={myStyle}>Gotta Catch 'Em All!</h1>
                <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
                <img src={pokemon.img + '.jpg'} alt={pokemon.name} /><br />
                {pokemon.readyToFight ? 'Ready to FIGHT!' : 'Cowards away...!'}<br />
                <a href={`/pokemon`}> Go Back </a> 
        </div>
    )
}

export default Show