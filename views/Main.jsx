import React from "react";

const Main = () => {

    const container = {
        border: '1px solid black',
        textAlign: 'center',
        width: '100%',
        height: '98vh',
        margin: '0px,',
        padding: '0px',
        backgroundImage: 'url("pokemon-bg.jpeg")'
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

    return(
        <div style={container}>
            <div style={content}>
                <h1 style={h1}>Welcome to the Pokemon App</h1>
            </div>
            <nav style={nav}>
                <h2>Links</h2>
                <h2>
                <a href="/" alt="">Home</a> | <a href="/pokemon" alt="List Pokemon">List Pokemon</a> | <a href="/pokemon/new" alt="Add Pokemon">Create Pokemon</a>
                </h2>
            </nav>
        </div>
    )
}



export default Main;