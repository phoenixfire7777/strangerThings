import { deletePost } from "../API"

export default function PostCard({post, token, fetchPosts}){
    const {_id, title, description, price, location, willDeliver, isAuthor} = post
    console.log(isAuthor)

    async function handleClick(_id){
        await deletePost(_id, token)
        await fetchPosts()
        console.log("post deleted")
    }
    return (
        <div key={_id}>
            <h4>title: {title}</h4>
            <h2>description:{description}</h2>
            <h2>Price:{price}</h2>
            <h2>Location: {location}</h2>
            <h2>Will Deliver{willDeliver}</h2>
            {isAuthor
                ?<button onClick={() => handleClick(_id)}>Delete</button>
                : <></>
            }
        </div>
    )

}