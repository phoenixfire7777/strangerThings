import { useState } from "react";


export default function NewPost(token) {
  const COHORT_NAME = "2302-acc-et-web-pt-a"
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [location, setLocation] = useState("")
  const [willDeliver, setWillDeliver] = useState(false)


  async function makePost(e) {
    e.preventDefault()
    console.log(token)

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.token}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  console.log(willDeliver)
  return (
    <form onSubmit={makePost}>
      <h1>New Posts</h1>
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