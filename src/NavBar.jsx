import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <div id="navBar">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
        </div>
    )
}