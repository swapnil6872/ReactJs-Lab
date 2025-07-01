import Home from './components/Home'
import './App.css'
import { useState } from 'react'
import { Link ,Routes,Route} from 'react-router-dom'
import About from './components/About'
import User from './components/User'
import Userdetails from './components/Userdetails'
 

function App() {


  return (
    <div className='p-1  w-1/2 m-auto'>

    <nav className='my-10 flex justify-center gap-10'>
      <Link to="/">Home</Link>
            <Link to="/user">user</Link>
                  <Link to="/about">about</Link>
                        
    </nav>
    <Routes>
         <Route  path='/' element={<Home/>} />
         <Route path='/user' element={<User/>} />
          
            <Route path='/user/:id' element={<Userdetails/>} />
         <Route path='/about' element={<About/>}/>
    </Routes>
     
    </div>
  )
}

export default App
