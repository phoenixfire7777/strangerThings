import { useState} from "react"
import { updatePost } from "./API"
export default function UpdatePost({token, id, fetchPosts}){

console.log(id)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [willDeliver, setWillDeliver] = useState(false)

    async function makePost(e) {
        e.preventDefault()
        
        await updatePost(id, token, title, description, price, location, willDeliver)
        await fetchPosts()
       
      }
      console.log(willDeliver)
      return (
        <form onSubmit={makePost}>
          <h1>Update Posts</h1>
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="price">price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="location">location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="">willDeliver</label>
          <input
            type="checkbox"
            id="willDeliver"
            value={willDeliver}
            onChange={(e) => setWillDeliver(e.target.checked)}
          />
          <button>Submit</button>
        </form>
      )

}

