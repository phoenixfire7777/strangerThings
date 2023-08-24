import { useState } from "react"
import NavBar from "./NavBar"
import {Routes, Route} from "react-router-dom"
import Home from "./HomePage"
import Posts from "./Posts"
import "./App.css"
function App() {
 const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <div id="main-section">
      <h1>Stranger Things</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken} />} />
        <Route path="/posts" element={<Posts token={token} />} />
      </Routes>
    </div>
  )
}

export default App
