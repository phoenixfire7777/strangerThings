import { useState } from "react"
import NavBar from "./NavBar"
import {Routes, Route} from "react-router-dom"
import Home from "./HomePage"
import Posts from "./Posts"
import "./App.css"
import Register from "./Register"
import Login from "./Login"

import NewPost from "./NewPost"
import Logout from "./component/Logout"
function App() {
 const [token, setToken] = useState(localStorage.getItem("token"))
 const [authenticated, setAuthenticated] = useState(false)
 console.log(authenticated)
 
console.log(token)
  return (
    <div id="main-section">
      <h1>Stranger Things</h1>
      <NavBar authenticated={authenticated} />
      <Routes>
        <Route path="/" element={<Login setToken={setToken} setAuthenticated={setAuthenticated}/>} />
        <Route path="/home" element={<Home token={token} setToken={setToken}/>} />
        <Route path="/posts/*" element={<Posts token={token} />} />
        <Route path="/register" element={<Register setToken={setToken} setAuthenticated={setAuthenticated}/>} />
        <Route path="/newPosts" element={<NewPost token={token} />} />
        <Route path="/logout" element={<Logout setToken={setToken} setAuthenticated={setAuthenticated}/>} />
      </Routes>
    </div>
  )
}

export default App
