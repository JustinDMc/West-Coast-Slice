import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export default function Signup() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [home_address, setHomeAddress] = useState("");
    const [errors, setErrors] = useState(null);

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        const customer = {
            username:username,
            password,
            home_address:home_address
        }
        const res = await fetch(`http://localhost:3000/customers`, { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({customer})
        });
        const customerData = await res.json();
        if(res.ok){
            history.push('/');
        } else {
            setErrors(customerData.message)
        }
    };

    return (
        <div style={{textAlign: 'center'}}>
            <form onSubmit={handleSubmit} style={{backgroundColor: "white", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "300px", padding: "8px", margin: "auto"}}>
                <h1>Signup</h1>
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    value={username} 
                    onChange={(e) => setUserName(e.target.value)}>
                </input>
                <br></br>
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <br></br>
                <input 
                    type="text" 
                    placeholder="Address" 
                    name="home_address" 
                    value={home_address} 
                    onChange={(e) => setHomeAddress(e.target.value)}>
                </input>
                <br></br>
                <br></br>
                <input submit type="submit" value="Sign Up"></input>
                {errors?errors.map(error => <div>{error}</div>):null}
            </form>
        </div>
    )
}
