import { useState } from "react"
import NavBar from "./NavBar"
import {Routes, Route} from "react-router-dom"
import Home from "./HomePage"
import Posts from "./Posts"
import "./App.css"
import Register from "./Register"
import Login from "./Login"
import Settings from "./Settings"
function App() {
 const [token, setToken] = useState(localStorage.getItem("token"))
 const [isLoggedIn, setIsLoggedIn] = useState(false)
 if(isLoggedIn){
  console.log("logged in")
 }
 else{
  console.log("logged out")
 }
 
console.log(token)
  return (
    <div id="main-section">
      <h1>Stranger Things</h1>
      <NavBar token={token} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken} />} />
        <Route path="/posts" element={<Posts token={token} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} setIsLoggedIn={setIsLoggedIn}/>
        <Route path="/Settings" element={Settings} setToken={setToken} />
      </Routes>
    </div>
  )
}

export default App
