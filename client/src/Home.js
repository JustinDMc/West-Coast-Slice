import React from 'react'

export default function Home( {currentUser, pizzaCollection} ) {

    return (
        <div style={{display: "table"}}>
            <h1>Welcome {currentUser.username}, we are on the home page.</h1>
            {pizzaCollection.map(pizza => 
                <h2>{pizza.name}</h2>)}
        </div>
    )
}
