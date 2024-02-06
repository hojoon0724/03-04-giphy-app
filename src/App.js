import { useState } from 'react'
import ShowGif from './components/ShowGif'
import Button from './components/Button'
import Header from './components/Header'
import './App.css'

function App() {
  const apiKey = 'USXtqDtBaneNm0kmLZtDcnhUKrsurdAj'

  // state
  const [gif, setGif] = useState(null)

  async function getGif() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.data.images.downsized.url)
    setGif(data)
  }

  return (
    <div className="App">
      <Header />
      <ShowGif gif={gif} />
      <Button onClick={getGif} />
    </div>
  )
}

export default App
