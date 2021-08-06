import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        if(customerData.id) {
            setCurrentUser(customerData)
            history.push("/home")
        } else {
            setErrors(customerData.message)
        }
    };


    return (
        <div style={{textAlign: "center", margin: "auto"}}>
            <h1 className="Title"style={{backgroundColor: "rgba(153, 43, 29, 0.8)", color: "#262626", margin: "0px"}}>West Coast Slice</h1>
            <form className="login-form" onSubmit={handleSubmit} style={{backgroundColor: "white", border: '1px solid black', borderRadius: "8px", padding: "8px", width: "300px", margin: "auto", marginTop: "250px"}}>
                <h1 style={{color: "#992b1d"}}>West Coast Slice!</h1>
                <h2 style={{color: "#262626"}}>Login</h2>
                <TextField size="small" variant="outlined" type="text" 
                    placeholder="Username"
                    name="username" 
                    value={username} 
                    onChange={(e) => setUserName(e.target.value)}/>
                <br></br>
                <br></br>
                <TextField size="small" variant="outlined"
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                    <br></br>
                    <br></br>
                <NavLink to="/signup" style={{fontWeight: "bold", color: "#36a9e3"}}>Sign Up</NavLink>
                <br></br>
                <br></br>
                <Button variant="contained" submit type="submit" value="Log In" style={{color: "black", fontWeight: "bold"}}>Login</Button>
                <div>{errors}</div>
            </form>
        </div>
    )
}
