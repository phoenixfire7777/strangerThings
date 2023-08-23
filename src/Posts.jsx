import {useState, useEffect} from 'react'
import { fetchPosts } from "./API"

export default function Posts({token}){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchData() {
            const data = await fetchPosts()
            setPosts(data)
            // console.log(posts)
            console.log(data)
            console.log(data[0])
            console.log(data[0].description)

        }
        fetchData()
    }, [])
    
    console.log(posts[0])
    // console.log(posts[0].description)

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