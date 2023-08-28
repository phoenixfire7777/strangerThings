import { Link } from "react-router-dom"

export default function NavBar(token) {

    return (
        <>
                <div id="navBar">
                     <Link to="/">Login</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/settings">Settings</Link>
                    <Link to="/newPosts">New Posts</Link>
                    <Link to="/logout">Logout</Link>
                </div>
           
        </>
    )


}       
