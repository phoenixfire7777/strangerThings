import { useState } from "react"
import { postMessage } from "./API"
export default function SendMessage({token, id}){
    const [message, setMessage] = useState("")

    async function handleSubmit(e){
        e.preventDefault()
        await postMessage(id, token, message)
    }

    return(
        <div>
        <h1>Posts Page</h1>
        <form onSubmit={handleSubmit}>
        
        <label htmlFor="message">Message</label>
        <input
            type="text"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit'>Submit</button>
    </form>
        </div>
    )
}