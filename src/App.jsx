import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Home from './page/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Home/>
      </div>
     
    </>
  )
}

export default App
