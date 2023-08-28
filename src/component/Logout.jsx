
export default function Logout({ setToken, setAuthenticated}){

   async function logout(){
        localStorage.clear()
        setToken(null)
        setAuthenticated(false)
    }
    return <button onClick={() => logout()}>Logout</button>
}