import { useState } from "react"
import NavBar from "./NavBar"
import {Routes, Route} from "react-router-dom"
import Home from "./HomePage"
import Posts from "./Posts"
import "./App.css"
import Register from "./Register"
import Login from "./Login"
import Settings from "./Settings"
import NewPost from "./NewPost"
import Logout from "./component/Logout"
function App() {
 const [token, setToken] = useState(localStorage.getItem("token"))
 const [athenticated, setAthenticated] = useState(false)
 
 
console.log(token)
  return (
    <div id="main-section">
      <h1>Stranger Things</h1>
      <NavBar athenticated />
      <Routes>
        <Route path="/" element={<Login setToken={setToken} setAthenticated={setAthenticated}/>} />
        <Route path="/home" element={<Home token={token} setToken={setToken}/>} />
        <Route path="/posts/*" element={<Posts token={token} />} />
        <Route path="/register" element={<Register setToken={setToken} setAthenticated={setAthenticated}/>} />
        <Route path="/newPosts" element={<NewPost token={token} />} />
        <Route path="/logout" element={<Logout setToken={setToken} setAthenticated={setAthenticated}/>} />
      </Routes>
    </div>
  )
}

export default App
