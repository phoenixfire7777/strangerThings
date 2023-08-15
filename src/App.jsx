import NavBar from "./NavBar"
import {Routes, Route} from "react-router-dom"
import Home from "./HomePage"
import Posts from "./Posts"
import "./App.css"
function App() {
 

  return (
    <div id="main-section">
      <h1>Stranger Things</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  )
}

export default App
