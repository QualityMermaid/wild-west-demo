import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"

function App() {

  const [outcome, setOutcome] = useState("")
  // const [outcomeFirstWord, setOutcomeFirstWord] = useState("")
  const [dummy, setDummy] = useState(0)

  // always do this first otherwise infinate loop
  // useEffect(()=>{}, [])

  useEffect(()=>{
    handleSurvive()
    console.log("IM here")
  }, [dummy])

  function insultJezz(){
    setDummy(dummy+1) 
  }

  async function handleSurvive(){
    // console.log("survive")
    const API = "http://localhost:8083/survive"
    // what you put here MUST be the same as the server .get
    const res = await axios.get(API)
    // console.log(res)
    setOutcome(res.data)
    // console.log(res.data.replace(/ .*./, ""))
    // cannot use this as its async and isnt getting data fast enough
    // const firstWord = outcome.replace(/ .*./, "")

    // must use this
    const firstWord = res.data.replace(/ .*./, "")

    console.log(firstWord)
  }

  return (
    <div className="App"> 
      {/* <button onClick={handleSurvive}>Brave the Oregon Trail</button> */}
      <button onClick={insultJezz}>Brave the Oregon Trail</button>
      {outcome}
    </div>
  );
}

export default App;
