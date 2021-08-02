import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export default function Login({setCurrentUser}) {
    const history = useHistory();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const customer = {
            username:username,
            password,
        }
        const res = await fetch(`http://localhost:3000/logins`, { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({customer})
        });
        const customerData = await res.json();
        if(customerData.id){
            setCurrentUser(customerData)
            history.push("/home")
        } else {
            setErrors(customerData.message)
        }
    };


    return (
        <div style={{textAlign: "center", margin: "auto"}}>
            <form onSubmit={handleSubmit} style={{backgroundColor: "white", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "300px", margin: "auto"}}>
                <h1>Welcome to West Coast Slice!</h1>
                <h2>Login</h2>
                <input type="text" placeholder="Username"></input>
                <br></br>
                <input type="password" placeholder="Password"></input>
                <br></br>
                <NavLink to="/signup">Sign Up</NavLink>
                <br></br>
                <br></br>
                <input submit type="submit" value="Log In"></input>
                {errors?errors.map(error => <div>{error}</div>):null}
            </form>
        </div>
    )
}
