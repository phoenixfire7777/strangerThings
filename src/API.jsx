const COHORT_NAME = "2302-acc-et-web-pt-a"
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

//register new user
export async function registerUser() {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: '',
            password: ''
          }
        })
      });
      const result = await response.json();
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
  }

  //login user
  export async function login(userName, password) {

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: userName,
            password: password
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

  //get user 
  export async function myData() {

    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  //get posts
  export async function fetchPosts(){
    try {
      const response = await fetch(`${BASE_URL}/posts`)
  
      const result = await response.json();
      console.log(result);
      return result.data.posts
    } catch (err) {
      console.error(err);
    }
  }

  //create posts
  export async function makePost() {

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          post: {
            title: "My favorite stuffed animal",
            description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
            price: "$480.00",
            willDeliver: true
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
  
  //update posts
  export async function updatePost () {
    try {
      // You will need to insert a variable into the fetch template literal 
      // in order to make the POST_ID dynamic. 
      // 5e8d1bd48829fb0017d2233b is just for demonstration.
      const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          post: {
            title: "My favorite stuffed animal",
            description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
            price: "$480.00",
            location: "New York, NY",
            willDeliver: true
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

  //delete posts
  export async function deletePost () {
    try {
      const response = await fetch(`${BASE_URL}/posts/`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
// create new message
export async function postMessage () {
    try {
      const response = await fetch(`${BASE_URL}/posts/5e8929ddd439160017553e06/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          message: {
            content: "Do you still have this?  Would you take $10 less?"
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