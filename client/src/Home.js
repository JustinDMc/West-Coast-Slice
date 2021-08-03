import React from 'react'

export default function Home( {currentUser, pizzaCollection} ) {

    return (
        // Entire home screen page, classic pizzas and order form/ confirmation window
        <div style={{display: "flex"}} className="home-screen-div">
            {/* <h1>Welcome {currentUser.username}, we are on the home page.</h1> */}

            {/* Left side of home page, where all pizzas are rendered */}
            <div className="pizzaContainer" style={{border: "10px solid orange", flex: "65%", textAlign: 'center' ,display: "grid", gridTemplateColumns: "repeat(2, 300px)", gridRowGap: "24px", justifyContent: "space-around", alignItems: "center", width: "100%", margin: "auto"}}>

                {/* Where we map through backend pizzas and create a div with an img, name, toppings, size and price for each one */}
                {pizzaCollection.map(pizza => 
                    <div key={pizza.id} style={{textAlign: 'center', border: "3px solid black",  padding: "6px", borderRadius: "8px", margin: "auto", backgroundColor: "white"}}>
                        <img src={pizza.img_url} style={{maxLength: "100px", maxHeight: "100px"}}/>
                        <h2>{pizza.name}</h2>
                        <p>{pizza.toppings.map(topping => topping.name).join(" / ")}</p>
                        <h5>{pizza.size}</h5>
                        <h3>${pizza.price}</h3>
                        <button>Order</button>
                    </div>
                    )}
            </div>

            {/* Right side of home page, order form and confirmation window */}
            <div className="pizza-form" style={{flex: "35%", textAlign: 'center', border: "10px solid orange", maxHeight: "100%"}}>
                <h1 style={{color: "white"}}>Make your own!</h1>
                <h3 style={{color: "white"}}><em>--3 topping maximum--</em></h3>

                {/* Entire pizza form that on "submit" will get sent to Orders */}
                <form style={{height: "30%"}}>

                    {/* Size label/selection area */}
                    <label for="size" style={{color: "white", fontSize: "24px"}}>Size:   </label>
                    <select name="size" id="size" form="customForm">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="X-Large">X-Large</option>
                    </select>

                    <br></br>

                    {/* Area to select first topping */}
                    <h3 style={{color: "white"}}>Topping One:</h3>
                    <input type="radio" id="meat" name="first_topping" value="Meat"></input>
                    <label for="meat" style={{color: "white"}}>Meat</label>
                    <input type="radio" id="veggie" name="first_topping" value="Veggie"></input>
                    <label for="veggie" style={{color: "white"}}>Veggie</label>
                    <input type="radio" id="other" name="first_topping" value="Other"></input>
                    <label for="other" style={{color: "white"}}>Other</label>
                    <br></br>
                    <input type="text" placeholder="Select your topping"></input>

                    {/* Area to select second topping */}
                    <h3 style={{color: "white"}}>Topping Two:</h3>
                    <input type="radio" id="meat" name="first_topping" value="Meat"></input>
                    <label for="meat" style={{color: "white"}}>Meat</label>
                    <input type="radio" id="veggie" name="first_topping" value="Veggie"></input>
                    <label for="veggie" style={{color: "white"}}>Veggie</label>
                    <input type="radio" id="other" name="first_topping" value="Other"></input>
                    <label for="other" style={{color: "white"}}>Other</label>
                    <br></br>
                    <input type="text" placeholder="Select your topping"></input>

                    {/* Area to select third topping */}
                    <h3 style={{color: "white"}}>Topping Three:</h3>
                    <input type="radio" id="meat" name="first_topping" value="Meat"></input>
                    <label for="meat" style={{color: "white"}}>Meat</label>
                    <input type="radio" id="veggie" name="first_topping" value="Veggie"></input>
                    <label for="veggie" style={{color: "white"}}>Veggie</label>
                    <input type="radio" id="other" name="first_topping" value="Other"></input>
                    <label for="other" style={{color: "white"}}>Other</label>
                    <br></br>
                    <input type="text" placeholder="Select your topping"></input>

                    <br></br>
                    <br></br>

                    {/* Add a note area */}
                    <input type="text" placeholder="Notes..."></input>
                    <br></br>
                    <br></br>

                    {/* Submit your order button */}
                    <input submit type="submit" value="Order"></input>
                </form>

                <hr></hr>

                {/* Confirmation window area */}
                <div style={{textAlign: 'center'}}>
                    <h1 style={{color: "white"}}>Confirm Your Order:</h1>  
                    <div style={{border: "2px solid black", height: "550px", marginTop: "100px", marginLeft: "20px", marginRight: "20px"}}>
                          
                    </div>
                </div>

            </div>
        </div>
    )
}
