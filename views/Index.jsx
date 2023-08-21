import React from 'react'

const Index = ({pokemon}) => {
    const myStyle = {
        color: '#fff',
        backgroundColor: '#000'
    };

    return (
        <div style={myStyle}>
            <h1>See All The Pokemon!</h1>
            <ul>
            {
                pokemon.map((poke, i) => {
                    <>
                        <li key={i}>{poke.name}</li><br />
                        <img src={poke.img} alt={poke.name} />
                    </>
                }) 
            }
            </ul>
        </div>
    )
}

export default Index