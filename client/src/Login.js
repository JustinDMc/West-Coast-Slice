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
        debugger
        if(customerData.id) {
            setCurrentUser(customerData)
            history.push("/home")
        } else {
            setErrors(customerData.message)
        }
    };


    return (
        <div style={{textAlign: "center", margin: "auto"}}>
            <form onSubmit={handleSubmit} style={{backgroundColor: "white", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "300px", margin: "auto"}}>
                <h1 style={{color: "orange"}}>West Coast Slice!</h1>
                <h2>Login</h2>
                <input 
                    type="text" 
                    placeholder="Username"
                    name="username" 
                    value={username} 
                    onChange={(e) => setUserName(e.target.value)}>
                </input>
                <br></br>
                <br></br>
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <br></br>
                <NavLink to="/signup">Sign Up</NavLink>
                <br></br>
                <br></br>
                <input submit type="submit" value="Log In" style={{color: "black", backgroundColor: "lightgreen"}}></input>
                <div>{errors}</div>
            </form>
        </div>
    )
}
