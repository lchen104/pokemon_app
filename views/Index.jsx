import React from 'react'

const Index = ({pokemon}) => {
    
    const myStyle = {
        color: '#fff',
        backgroundColor: '#000'
    };

    return (
        <div>
            <h1 style={myStyle}>See All The Pokemon!</h1>
            <ul>
            {
                pokemon.map((poke, i) => (
                    <li key={i}>
                        {/* {poke.name}<br /> */}
                        {/* <img src={poke.img} alt={poke.name} /> */}
                        <a href={`/pokemon/${i}`}> {poke.name[0].toUpperCase() + poke.name.slice(1)} </a> 
                    </li>
                )) 
            }
            </ul>
        </div>
    )
}

export default Index