import { Link } from "react-router-dom"

export default function NavBar(authenticated) {

    if(!authenticated){
        return (
            <>
                    <div id="navBar">
                         <Link to="/">Login</Link>
                        <Link to="/posts">Posts</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/newPosts">New Posts</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
               
            </>
        )
    }
    else{
    return (
        <>
                <div id="navBar">
                    
                    <Link to="/home">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/newPosts">New Posts</Link>
                    <Link to="/logout">Logout</Link>
                </div>
           
        </>
    )
    }

}       
