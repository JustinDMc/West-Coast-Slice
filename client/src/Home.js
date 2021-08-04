import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function Home( {currentUser, pizzaCollection} ) {
    // Where we set the state of all our toppings fetches
    const [meatToppingCollection, setMeatToppingCollection] = useState([]);
    const [veggieToppingCollection, setVeggieToppingCollection] = useState([]);
    const [otherToppingCollection, setOtherToppingCollection] = useState([]);
    const [cheeseToppingCollection, setCheeseToppingCollection] = useState([]);
    const [sauceToppingCollection, setSauceToppingCollection] = useState([]);

    // Fetch to get our toppings
    useEffect(() => {
        fetch(`/meat_toppings`)
        .then(res => res.json())
        .then(meatToppingData => setMeatToppingCollection(meatToppingData))
    }, [])
    
    useEffect(() => {
        fetch(`/veggie_toppings`)
        .then(res => res.json())
        .then(veggieToppingData => setVeggieToppingCollection(veggieToppingData))
    }, [])
    
    useEffect(() => {
        fetch(`/other_toppings`)
        .then(res => res.json())
        .then(otherToppingData => setOtherToppingCollection(otherToppingData))
    }, [])

    useEffect(() => {
        fetch(`/cheese_toppings`)
        .then(res => res.json())
        .then(cheeseToppingData => setCheeseToppingCollection(cheeseToppingData))
    }, [])

    useEffect(() => {
        fetch(`/sauce_toppings`)
        .then(res => res.json())
        .then(sauceToppingData => setSauceToppingCollection(sauceToppingData))
    }, [])
  

    // Handles the conditional rendering for the first topping
    const [meatSelect, setMeatSelect] = useState(false);
    const [veggieSelect, setVeggieSelect] = useState(false);
    const [otherSelect, setOtherSelect] = useState(false);

    function toggleMeatSelect() {
        setMeatSelect(!meatSelect);
        setVeggieSelect(false)
        setOtherSelect(false)
    }

    function toggleVeggieSelect() {
        setVeggieSelect(!veggieSelect);
        setMeatSelect(false)
        setOtherSelect(false)
    }

    function toggleOtherSelect() {
        setOtherSelect(!otherSelect);
        setVeggieSelect(false)
        setMeatSelect(false)
    }

    // Handles the conditional rendering for the second topping
    const [meatSelect2, setMeatSelect2] = useState(false);
    const [veggieSelect2, setVeggieSelect2] = useState(false);
    const [otherSelect2, setOtherSelect2] = useState(false);

    function toggleMeatSelect2() {
        setMeatSelect2(!meatSelect2);
        setVeggieSelect2(false)
        setOtherSelect2(false)
    }

    function toggleVeggieSelect2() {
        setVeggieSelect2(!veggieSelect2);
        setMeatSelect2(false)
        setOtherSelect2(false)
    }

    function toggleOtherSelect2() {
        setOtherSelect2(!otherSelect2);
        setVeggieSelect2(false)
        setMeatSelect2(false)
    }

    // Handles the conditional rendering for the third topping
    const [meatSelect3, setMeatSelect3] = useState(false);
    const [veggieSelect3, setVeggieSelect3] = useState(false);
    const [otherSelect3, setOtherSelect3] = useState(false);

    function toggleMeatSelect3() {
        setMeatSelect3(!meatSelect3);
        setVeggieSelect3(false)
        setOtherSelect3(false)
    }

    function toggleVeggieSelect3() {
        setVeggieSelect3(!veggieSelect3);
        setMeatSelect3(false)
        setOtherSelect3(false)
    }

    function toggleOtherSelect3() {
        setOtherSelect3(!otherSelect3);
        setVeggieSelect3(false)
        setMeatSelect3(false)
    }

    // Handles tracking orders from classic pizzas and in pizza form, and handles conditional rendering on selections in custom order form
    const [name, setName] = useState("")
    const [classicName, setClassicName] = useState("")
    const [size, setSize] = useState("")
    const [sauce, setSauce] = useState("")
    const [cheese, setCheese] = useState("")
    const [topping1, setTopping1] = useState("")
    const [topping2, setTopping2] = useState("")
    const [topping3, setTopping3] = useState("")
    const [customToppings, setCustomToppings] = useState("");
    const [classicToppings, setClassicToppings] = useState("")
    const [price, setPrice] = useState("")
    const [classicPrice, setClassicPrice] = useState("")
    const [orderSubmit, setOrderSubmit] = useState(false)
    const [classicOrder, setClassicOrder] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        setName("Custom")
        if(size == "Small"){
            setPrice(8)
        } else if(size == "Medium") {
            setPrice(10)
        } else if(size == "Large"){
            setPrice(12)
        } else {
            setPrice(14)
        }
        setOrderSubmit(!orderSubmit)
    }

    async function orderClassic(e){
        setClassicOrder(!classicOrder)
        setClassicName(e.target.name)
        setClassicPrice(e.target.value)
        setClassicToppings(e.target.id)
    }

    async function deleteCustomPizzaOrder(){
        setOrderSubmit(!orderSubmit)
    }

    async function deleteClassicPizzaOrder(){
        setClassicOrder(!classicOrder)
    }

    // Handles editing a classic order in confirmation window
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    // Handles editing a custom order in confirmation window
    const [open2, setOpen2] = React.useState(false);
      
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
      
    const handleClose2 = () => {
        setOpen2(false);
    };

    // Handles confirming the custom pizza in confirmation window
    async function handleConfirmCustomOrder(e){
        e.preventDefault();
        alert("Pizza Confirmed");
        setOrderSubmit(!orderSubmit)
    }

    // Handles confirming the classic pizza in confirmation window
    async function handleConfirmClassicOrder(e){
        e.preventDefault();
        alert("Pizza Confirmed");
        setClassicOrder(!classicOrder)
    }
 
    return (
        // Entire home screen page, classic pizzas and order form/ confirmation window
        <div style={{display: "flex"}} className="home-screen-div">
            {/* <h1>Welcome {currentUser.username}, we are on the home page.</h1> */}

            {/* Left side of home page, where all pizzas are rendered */}

            <div className="pizzaContainer" style={{flex: "65%", textAlign: 'center' ,display: "grid", gridTemplateColumns: "repeat(3, 250px)", gridRowGap: "24px", justifyContent: "space-around", alignItems: "center", width: "100%", margin: "auto"}}>

                {/* Where we map through backend pizzas and create a div with an img, name, toppings, size and price for each one */}
                {pizzaCollection.map(pizza => 
                    <div key={pizza.id} style={{textAlign: 'center', border: "3px solid black",  padding: "6px", borderRadius: "8px", margin: "auto", backgroundColor: "white", minHeight: "442px"}}>
                        <img src={pizza.img_url} style={{maxLength: "100px", maxHeight: "100px"}}/>
                        <h2 style={{backgroundColor: "red"}}>{pizza.name}</h2>
                        <hr></hr>
                        <p>{pizza.toppings.map(topping => topping.name).join(" / ")}</p>
                        <hr></hr>
                        <h5>{pizza.size}</h5>
                        <hr></hr>
                        <h3>${pizza.price}</h3>
                        <button name={pizza.name} value={pizza.price} id={pizza.toppings.map(topping => topping.name).join(" / ")}onClick={orderClassic}>Order</button>
                    </div>
                    )}
            </div>

            {/* Right side of home page, order form and confirmation window */}

            <div className="pizza-form" style={{flex: "35%", textAlign: 'center', borderLeft: '6px solid black'}}>
                <h1 style={{color: "white"}}>Make your own!</h1>
                <h3 style={{color: "white"}}><em>--3 topping maximum--</em></h3>
                <h5 style={{color: "white"}}><em>Small $8, Medium $10, Large $12, X-Large $14</em></h5>

                {/* Entire pizza form (upper right side) that on "submit" will get sent to Orders */}
                <form onSubmit={handleSubmit} style={{}}>

                    {/* Size label/selection area */}
                    <label for="size" style={{color: "white", fontSize: "24px"}}>Size:   </label>
                    <select name="size" id="size" form="customForm" onChange={(e) => setSize(e.target.value)}>
                        <option value="Select-">Select-</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="X-Large">X-Large</option>
                    </select>

                    <br></br>
                    <br></br>

                    <label for="sauce" style={{color: "white", fontSize: "16px"}}>Sauce:   </label>
                    <select name="sauce" id="sauce" form="customForm" onChange={(e) => setSauce(e.target.value)}>
                        <option value="Select-">Select-</option>
                        {sauceToppingCollection.map(sauce => 
                            <option value={sauce.name}>{sauce.name}</option>)}
                    </select>

                    <br></br>

                    <label for="cheese" style={{color: "white", fontSize: "16px"}}>Cheese:   </label>
                    <select name="cheese" id="cheese" form="customForm" onChange={(e) => setCheese(e.target.value)}>
                        <option value="Select-">Select-</option>
                        {cheeseToppingCollection.map(cheese => 
                            <option value={cheese.name}>{cheese.name}</option>)}
                    </select>

                    {/* Area to select first topping */}
                    <h3 style={{color: "white"}}>Topping One:</h3>
                    <input type="radio" id="meat1" name="first_topping" value="Meat" onClick={toggleMeatSelect}></input>
                    <label for="meat1" style={{color: "white"}}>Meat</label>
                    <input type="radio" id="veggie1" name="first_topping" value="Veggie" onClick={toggleVeggieSelect}></input>
                    <label for="veggie1" style={{color: "white"}}>Veggie</label>
                    <input type="radio" id="other1" name="first_topping" value="Other" onClick={toggleOtherSelect}></input>
                    <label for="other1" style={{color: "white"}}>Other</label>
                    <br></br>
                    <select name="topping_one_selection" id="topping_one_selection" form="CustomForm" style={{width: "180px"}} onChange={(e) => setTopping1(e.target.value)}>
                        <option value="Select-">Select-</option>
                        {meatSelect ? meatToppingCollection.map(topping => 
                            <option value={topping.name}>{topping.name}</option>
                            ):null}
                        {veggieSelect ? veggieToppingCollection.map(topping => 
                            <option value={topping.name}>{topping.name}</option>):null}
                        {otherSelect ? otherToppingCollection.map(topping => 
                            <option value={topping.name}>{topping.name}</option>):null}
                    </select>

                    {/* Area to select second topping */}
                    <h3 style={{color: "white"}}>Topping Two:</h3>
                    <input type="radio" id="meat2" name="first_topping" value="Meat" onClick={toggleMeatSelect2}></input>
                    <label for="meat2" style={{color: "white"}}>Meat</label>
                    <input type="radio" id="veggie2" name="first_topping" value="Veggie" onClick={toggleVeggieSelect2}></input>
                    <label for="veggie2" style={{color: "white"}}>Veggie</label>
                    <input type="radio" id="other2" name="first_topping" value="Other" onClick={toggleOtherSelect2}></input>
                    <label for="other2" style={{color: "white"}}>Other</label>
                    <br></br>
                    <select name="topping_two_selection" id="topping_two_selection" form="CustomForm" style={{width: "180px"}} onChange={(e) => setTopping2(e.target.value)}>
                        <option value="Select-">Select-</option>
                        {meatSelect2 ? meatToppingCollection.map(topping => 
                            <option value={topping.name}>{topping.name}</option>
                            ):null}
                        {veggieSelect2 ? veggieToppingCollection.map(topping => 
                            <option value={topping.name}>{topping.name}</option>):null}
                        {otherSelect2 ? otherToppingCollection.map(topping => 
                            <option value={topping.name}>{topping.name}</option>):null}
                    </select>

                    {/* Area to select third topping */}
                    <h3 style={{color: "white"}}>Topping Three:</h3>
                    <input type="radio" id="meat3" name="first_topping" value="Meat" onClick={toggleMeatSelect3}></input>
                    <label for="meat3" style={{color: "white"}}>Meat</label>
                    <input type="radio" id="veggie3" name="first_topping" value="Veggie" onClick={toggleVeggieSelect3}></input>
                    <label for="veggie3" style={{color: "white"}}>Veggie</label>
                    <input type="radio" id="other3" name="first_topping" value="Other" onClick={toggleOtherSelect3}></input>
                    <label for="other3" style={{color: "white"}}>Other</label>
                    <br></br>
                    <select name="topping_three_selection" id="topping_three_selection" form="CustomForm" style={{width: "180px"}} onChange={(e) => setTopping3(e.target.value)}>
                        <option value="Select-">Select-</option>
                        {meatSelect3 ? meatToppingCollection.map(topping => 
                            <option value={topping.name}>{topping.name}</option>
                            ):null}
                        {veggieSelect3 ? veggieToppingCollection.map(topping => 
                            <option value={topping.name}>{topping.name}</option>):null}
                        {otherSelect3 ? otherToppingCollection.map(topping => 
                            <option value={topping.name}>{topping.name}</option>):null}
                    </select>

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
                <div style={{textAlign: 'left', display: "grid", gridTemplateRows: "repeat(1, 120px"}}>
                    <h1 style={{color: "white", textAlign: "center"}}>Confirm Your Order:</h1>  

                    {/* Pizza 1 */}
                    {orderSubmit?
                    <div style={{border: "2px solid black", marginLeft: "20px", marginRight: "20px", backgroundColor: "white"}}>
                        <h2>Summary</h2>
                        <h3>Name: {name}</h3>
                        <h3>Size: {size}</h3>
                        <h3>Toppings: {sauce} / {cheese} / {topping1} / {topping2} / {topping3}</h3>
                        <h3>Price: ${price}</h3>
                        <Button onClick={deleteCustomPizzaOrder} style={{marginLeft: "15%", border: "2px solid black", backgroundColor: "red"}} size="small">Delete Order</Button>
                        <Button onClick={handleClickOpen2} style={{marginLeft: "10%", border: "2px solid black", backgroundColor: "lightblue"}} size="small">Edit Order</Button>
                        <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title" useref="entry-form">
                        <DialogTitle id="form-dialog-title">Modify your order:</DialogTitle>
                        {/* <form onSubmit={(e) => submitWorkoutForm(e)}> */}
                        <DialogContent>
                            <DialogContentText>
                               <b>Feel free to change your size or topping selections below!</b>
                            </DialogContentText>
                            <br></br>
                            <DialogContentText>
                               <b style={{fontSize: "20px"}}>Size</b>:
                            </DialogContentText>
                            <TextField
                            name="size"
                            margin="dense"
                            value={size}
                            type="text"
                            fullWidth
                            onChange={(e) => setSize(e.target.value)}
                            // value={formData.name}
                            // onChange={handleFormChange}
                            />
                            <br></br>
                            <br></br>
                            <DialogContentText>
                            <b style={{fontSize: "20px"}}>Toppings:</b>
                            </DialogContentText>
                            <TextField
                            autoFocus
                            name="date"
                            margin="dense"
                            value={size + " / " + sauce + " / " + cheese + " / " + topping1 + " / " + topping2 + " / " + topping3}
                            type="text"
                            fullWidth
                            onChange={(e) => setCustomToppings(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose2} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleClose2} type="submit" color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                        {/* </form> */}
                        </Dialog>
                        <Button onClick={handleConfirmCustomOrder}style={{marginLeft: "10%", border: "2px solid black", backgroundColor: "green"}} size="small">Confirm Order</Button>
                    </div> : null}


                    {/* Classic Pizza Order */}
                    {classicOrder? 
                    <div style={{border: "2px solid black", marginLeft: "20px", marginRight: "20px", backgroundColor: "white"}}>
                        <h2>Summary</h2>
                        <h3>Name: {classicName}</h3>
                        <h3>Size: Medium</h3>
                        <h3>Toppings: {classicToppings}</h3>
                        <h3>Price: ${classicPrice}</h3>
                        <Button onClick={deleteClassicPizzaOrder} style={{marginLeft: "15%", border: "2px solid black", backgroundColor: "red"}} size="small">Delete Order</Button>
                        <Button onClick={handleClickOpen} style={{marginLeft: "10%", border: "2px solid black", backgroundColor: "lightblue"}} size="small">Edit Order</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" useref="entry-form">
                        <DialogTitle id="form-dialog-title">Modify your order:</DialogTitle>
                        {/* <form onSubmit={(e) => submitWorkoutForm(e)}> */}
                        <DialogContent>
                            <DialogContentText>
                               <b>Feel free to change your size or topping selections below!</b>
                            </DialogContentText>
                            <br></br>
                            <DialogContentText>
                               <b style={{fontSize: "20px"}}>Size</b> (<em>custom pizzas are Medium only</em>) :
                            </DialogContentText>
                            <TextField
                            name="size"
                            margin="dense"
                            value="Medium"
                            type="text"
                            fullWidth
                            // value={formData.name}
                            // onChange={handleFormChange}
                            />
                            <br></br>
                            <br></br>
                            <DialogContentText>
                            <b style={{fontSize: "20px"}}>Toppings:</b>
                            </DialogContentText>
                            <TextField
                            autoFocus
                            name="date"
                            margin="dense"
                            value={classicToppings}
                            type="text"
                            fullWidth
                            onChange={(e) => setClassicToppings(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleClose} type="submit" color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                        {/* </form> */}
                        </Dialog>
                        <Button onClick={handleConfirmClassicOrder}style={{marginLeft: "10%", border: "2px solid black", backgroundColor: "green"}} size="small">Confirm Order</Button>
                    </div> : null}
                </div>

            </div>
        </div>
    )
}
