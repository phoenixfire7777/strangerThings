import { myData } from "./API"
import Register from "./Register"
import { useState, useEffect } from "react"
import PostCard from "./component/PostCard";
import Messages from "./component/Messages";
export default function Home({ token }) {
    const [userData, setUserData] = useState([])
    const [userPosts, setUserPosts] = useState([])
    useEffect(() => {
        async function fetchData() {
            const data = await myData(token)
            setUserData(data.data)
            setUserPosts(data.data.posts)
        }
        fetchData()
    }, [])
    console.log(userData.posts)
    return (
        <div>
            <h1>Home Page</h1>

            <p><strong>User Name:</strong> {userData.username}</p>
            {
                userPosts.map((post) => {
                    return (
                        <div>
                            <PostCard
                                post={post}
                            />
                            <Messages
                                messages={post.messages}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}