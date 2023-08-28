import { useState, useEffect } from 'react'
import { fetchPosts } from "./API"
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

import PostCard from './component/PostCard'
import UpdatePost from './UpdatePost'


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
                            <div>
                                <PostCard
                                    post={post}
                                    token={token}
                                    fetchPosts={fetchData}
                                />
                                {post.isAuthor
                                    ? <Link to="/posts/updatePost">update post</Link>
                                    : <></>
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
                                    : <></>
                                }
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}