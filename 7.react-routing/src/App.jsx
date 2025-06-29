import './App.css'
import { BrowserRouter, Route, Routes, Link, useNavigate, redirect, Outlet } from 'react-router-dom'
function App() {
 
  // const rou =[{
  //   path:,
  //   element:
  // }]

  return (
    <>

      <BrowserRouter>


        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/jee/online-coaching-class-11' element={<Class11Program />} ></Route>
            <Route path='/jee/online-coaching-class-12' element={<Class12Program />} ></Route>
            <Route path='/' element={<Landing />} ></Route>
            <Route path='*' element={<ErrorPage />} ></Route>
          </Route>
        </Routes>
     
      </BrowserRouter>

    </>
  )
}

function Layout() {

  return (
   
   <div style={{height:"100vh"}}>
    <Link to="/">Home</Link> &nbsp;
    <Link to="/jee/online-coaching-class-11">class11</Link> &nbsp;
    <Link to="/jee/online-coaching-class-12">class12</Link> &nbsp;
       
     <div style={{height:"90vh",background:'red'}}>
     <Outlet />
     </div>
    <div>
        <h4>Footer ! Contacts us</h4>
    </div>
  </div>
  )

}

function ErrorPage() {
  return (
    <>
      <div>
        something went wrong !! page did not exits
      </div>
    </>
  )
}
function Landing() {
  return (

    <>
      <p>Welcome to alen </p>
    </>
  )
}

function Class11Program() {
  return (
    <div>
      <p> class 11 progran</p>
    </div>
  )
}


function Class12Program() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate('/');
  }
  return (
    <div>
      <p> class 12 progran</p>
      <button onClick={redirectUser}>Go back to LandingPAge</button>
    </div>
  )
}

export default App
