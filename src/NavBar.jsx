import { Link } from "react-router-dom"

export default function NavBar(token, isLoggedIn) {
    if (isLoggedIn) {
        console.log("logged in")
    }
    else {
        console.log("logged out")
    }

    return (
        <>
                <div id="navBar">
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/settings">Settings</Link>
                    <Link to="/newPosts">New Posts</Link>

                </div>
           
        </>
    )


}       
