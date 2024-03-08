import { useState } from "react"


const App = () => {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [chatHistory, setChatHistory] = useState([])

  const surpriseOptions = [
    'Who founded Sugar cosmetics?',
    'Where does pizza come from?',
    'How do you make a chicken sandwich?'
  ]

  const surprise = () => {
    const randomValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)]
    setValue(randomValue)
  }

  const getResponse = async () => {
    if (!value) {
      setError("Error! Please ask a question.")
      return
    }
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          history: chatHistory,
          message: value
        }),
        headers: {
          'Content-type': 'application/json'
        }
      }
      const response = await fetch('http://localhost:8000/gemini', options)
      const data = await response.text() //text() synchronous method, hence awaiting
      console.log(data)

      setChatHistory(oldChatHistory => [...oldChatHistory, {
        role: "User",
        parts: value
      },
      {
        role: "Model",
        parts: data
      }
      ])
      setValue("")

    }
    catch (error) {
      console.error(error)
      setError("Something went wrong! Please try again later.")
    }
  }

  const clear = () => {
    setValue("")
    setError("")
    setChatHistory([])

  }

  return (

    <div className="app">
      <p>What do you want to know?
        <button className="surprise" onClick={surprise} disabled={!chatHistory}> Surprise me</button>
      </p>
      <div className="input-container">
        <input value={value} placeholder="When is Easter?" onChange={(e) => setValue(e.target.value)}></input>
        {!error && <button onClick={getResponse}>Ask me</button>}
        {error && <button onClick={clear}>Clear</button>}

      </div>
      {error && <p>{error}</p>}
      <div className="search-result">
        {chatHistory.map((chatItem, _index) => <div key={""}>
          <p className="answer">{chatItem.role}:{chatItem.parts}</p>
        </div>)}
      </div>



    </div>
  )
}

export default App
