import { useState } from 'react'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>KMO</h1>
      <section className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </section>
    </>
  )
}

export default App
