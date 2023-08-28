import { useState, useEffect } from 'react'
import { fetchPosts } from "./API"
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

import PostCard from './component/PostCard'
import UpdatePost from './UpdatePost'
import SendMessage from './SendMessage'


export default function Posts({ token }) {
    const [posts, setPosts] = useState([])
    async function fetchData() {
        const data = await fetchPosts(token)
        setPosts(data.data.posts)

    }
    useEffect(() => {

        fetchData()
    }, [])
    function handleSubmit(e) {
        e.preventDefault()
        const search = e.target.value
        const filteredPosts = posts.filter((post) => {
            return post.title.toLowerCase().includes(search.toLowerCase())
        })
        setPosts(filteredPosts)
    }
    console.log(posts)

    return (
        <div>
            <h1>Posts Page</h1>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="search">search</label>
                <input
                    type="text"
                    id="search"
                />
                <button type='submit'>Submit</button>
            </form>
            <div>
                {
                    posts.map((post) => {
                        return (
                            <div>
                                <PostCard
                                    post={post}
                                    token={token}
                                    fetchPosts={fetchData}
                                />
                                {post.isAuthor
                                    ? <Link to="/posts/updatePost">update post</Link>
                                    : <Link to="/posts/sendMessage">Send Message</Link>
                                }
                                {post.isAuthor

                                    ? <Routes>
                                        <Route
                                            path="updatePost"
                                            element={<UpdatePost
                                                token={token}
                                                id={post._id}
                                                fetchPosts={fetchData}
                                            />} />
                                    </Routes>
                                    : <Routes>
                                        <Route
                                            path="sendMessage"
                                            element={<SendMessage
                                                token={token}
                                                id={post._id}
                                            />} />

                                    </Routes>
                                }
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}