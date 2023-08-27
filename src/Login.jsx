import { useState, useEffect } from "react";
// import { login } from "./API";
export default function Login({ setToken, setIsLoggedIn}) {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const COHORT_NAME = "2302-acc-et-web-pt-a"
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

    async function handleSubmit(e) {
        e.preventDefault()



        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: userName,
                        password: password
                    }
                })
            });
            const result = await response.json();
            console.log(result);
            const token = result.data.token
            localStorage.setItem('token', token)
            setToken(token)
            

        } catch (err) {
            console.error(err);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="userName">User Name</label>
            <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )
}
