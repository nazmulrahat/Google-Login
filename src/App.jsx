import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './App.css'
import app from "./firebase/firebase";
import { useState } from "react";
const auth = getAuth(app)
function App() {
const GoogleProvider = new GoogleAuthProvider()
const [user,setUser]= useState(null)
console.log(user);
const handlegoogle = ()=>{
  signInWithPopup(auth,GoogleProvider)
  .then(result =>{
    const loguser = result.user
    setUser(loguser)
  })
  .catch(error =>{
    console.log(error);
  }
  )
}

  return (
    <>
    
      <h1>Fire base</h1>
    <div>
      <button onClick={handlegoogle}>
        Google sign in
      </button>
    </div>
   {user && <div>
    <p>User Name: {user.displayName}</p>
    <img src={user.photoURL} alt="" />
    </div>}
    </>
  )
}

export default App
