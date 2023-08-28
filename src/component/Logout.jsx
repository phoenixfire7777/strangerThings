export default function Logout({ setToken}){
   async function logout(){
        localStorage.clear()
        setToken(null)
    }
    return <button onClick={() => logout()}>Logout</button>
}