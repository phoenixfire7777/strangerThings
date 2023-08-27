export default function Logout({ setToken}){
   async function logout(e){
    e.preventDefault()
        localStorage.clear()
        setToken(null)
    }
    return <button onClick={logout}>Logout</button>
}