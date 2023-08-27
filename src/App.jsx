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
function App() {
 const [token, setToken] = useState(localStorage.getItem("token"))
 
 
console.log(token)
  return (
    <div id="main-section">
      <h1>Stranger Things</h1>
      <NavBar token={token} />
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken} />} />
        <Route path="/posts" element={<Posts token={token} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/Settings" element={<Settings setToken={setToken} />} />
        <Route path="/newPosts" element={<NewPost token={token} />} />
      </Routes>
    </div>
  )
}

export default App
