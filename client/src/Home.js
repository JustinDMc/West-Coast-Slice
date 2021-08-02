import React from 'react'

export default function Home( {currentUser, pizzaCollection} ) {

    return (
        <div style={{display: "flex"}} className="home-screen-div">
            {/* <h1>Welcome {currentUser.username}, we are on the home page.</h1> */}
            <div className="pizzaContainer" style={{border: "10px solid orange", flex: "50%", textAlign: 'center' ,display: "grid", gridTemplateColumns: "repeat(2, 300px)", gridRowGap: "24px", justifyContent: "space-around", alignItems: "center", width: "100%", margin: "auto"}}>
                {pizzaCollection.map(pizza => 
                    <div key={pizza.id} style={{textAlign: 'center', border: "3px solid black",  padding: "6px", borderRadius: "8px", margin: "auto"}}>
                        <img src={pizza.img_url} style={{maxLength: "100px", maxHeight: "100px"}}/>
                        <h2>{pizza.name}</h2>
                        <p>{pizza.toppings.map(topping => topping.name + " ")}</p>
                        <h5>{pizza.size}</h5>
                        <h3>${pizza.price}</h3>
                        <button>Order</button>
                    </div>
                    )}
            </div>
            <div className="pizza-form" style={{flex: "50%", textAlign: 'center', border: "10px solid orange"}}>
                <h1>Customize pizza</h1>
                <form>
                    <input type="text" placeholder="Size..."></input>
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="Ingredients..."></input>
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="Notes..."></input>
                </form>
            </div>
        </div>
    )
}
