import { useState, useEffect } from 'react'
import { fetchPosts } from "./API"
import PostCard from './component/PostCard'

export default function Posts({ token }) {
    const [posts, setPosts] = useState([])
    async function fetchData() {
        const data = await fetchPosts(token)
        setPosts(data.data.posts)

    }
    useEffect(() => {

        fetchData()
    }, [])

    console.log(posts)

    return (
        <div>
            <h1>Posts Page</h1>
            <div>
                {
                    posts.map((post) => {
                        return (
                            <PostCard
                                post={post}
                                token={token}
                                fetchPosts={fetchData}
                            />

                        )
                    })
                }
            </div>
        </div>
    )
}