import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/Signup'
import Login from './components/Login'
import GridDemo from './components/GridDemo'
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<SignUp></SignUp>} /> 
        <Route path="/" element={<Login></Login>} /> 

        </Routes>
      </BrowserRouter>
    {/* <SignUp/> */}
    {/* <Login/>   */}
    <div style={{width:'500px'}}>
    {/* <GridDemo/> */}
    </div>


    </>
  )
}

export default App
