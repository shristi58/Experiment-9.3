import React, { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

function App() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    axios.get("http://YOUR-LOAD-BALANCER-DNS/api/message")
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage("Error fetching message"))
  }, [])

  return (
    <div className="App">
      <h1>Full Stack App on AWS</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
