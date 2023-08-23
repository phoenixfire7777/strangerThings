import {useState, useEffect} from 'react'
import { fetchPosts } from "./API"

export default function Posts({token}){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchData() {
            const data = await fetchPosts()
            setPosts(data)
           
        }
        fetchData()
    }, [])
    
   

    return(
        <div>
            <h1>Posts Page</h1>
            <div>
        {
            posts.map((post)=>{
                return (
                    <div>
                        <h4>{post.title}</h4>
                        <h2>{post.description}</h2>
                        <h2>{post.price}</h2>
                        <h2>{post.location}</h2>
                        <h2>{post.willDeliver}</h2>
                        
                    </div>
                )
            })
        }
    </div>
        </div>
    )
}