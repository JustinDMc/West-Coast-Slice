import React from 'react'

export default function Home( {currentUser, pizzaCollection} ) {

    return (
        <div style={{display: "table"}}>
            <h1>Welcome {currentUser.username}, we are on the home page.</h1>
            {pizzaCollection.map(pizza => 
                <div style={{textAlign: 'center', border: "1px solid black", maxLength: "100px", maxHeight: "250px"}}>
                    <img src={pizza.img_url} style={{maxLength: "100px", maxHeight: "100px"}}/>
                    <h2>{pizza.name}</h2>
                    <h3>${pizza.price}</h3>
                </div>
                )}
        </div>
    )
}
