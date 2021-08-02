import React from 'react'

export default function Home( {currentUser, pizzaCollection} ) {

    return (
        <div  className="home-screen-div">
            <div className="pizzaContainer">
                <h1>Welcome {currentUser.username}, we are on the home page.</h1>
                {pizzaCollection.map(pizza => 
                    <div key={pizza.id} style={{textAlign: 'center', border: "1px solid black", maxLength: "100px", maxHeight: "300px",  padding: "6px", borderRadius: "8px"}}>
                        <img src={pizza.img_url} style={{maxLength: "100px", maxHeight: "100px"}}/>
                        <h2>{pizza.name}</h2>
                        <p>{pizza.toppings.map(topping => topping.name + " ")}</p>
                        <h5>{pizza.size}</h5>
                        <h3>${pizza.price}</h3>
                        <button>Order</button>
                    </div>
                    )}
            </div>
            <div className="pizza-form">
                    <h1>Customize pizza</h1>
            </div>
            <div className="confirmation-div">
                    <h1>Confirmation Window</h1>
            </div>
        </div>
    )
}
