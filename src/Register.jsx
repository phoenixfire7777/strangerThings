import { useState } from "react";
import { registerUser } from "./API";

export default function Register({ setToken }) {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const COHORT_NAME = "2302-acc-et-web-pt-a"
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


    async function handleSubmit(e) {
        e.preventDefault()
        // const newUser = {
        //     userName,
        //     password
        // }
        // registerUser(newUser)
        
            try {
                const response = await fetch(
                    `${BASE_URL}/users/register`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            user: {
                                username: userName,
                                password: password
                            }
                        }
                    )
                });
                const result = await response.json();
                // You can log ▲▲▲ the result
                // here ▼▼▼ to view the json object before returning it
                console.log(result)
                const token = result.data.token
                localStorage.setItem('token', token)
                setToken(token)
            } catch (err) {
                console.error(err);
            }
        

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>New User Form</h1>
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