import {Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'
import UserProvider from './context/UseContext'
import Contact from './pages/Contact.jsx'
import Projet from './components/Projets.jsx'
import Apropos from './components/Apropos.jsx'
import Education from './components/Education.jsx'

const Layout =()=>{
  return(
  <div>
      <Header/>
        <Outlet/>
      <Footer/>
  </div>
  )

}

const router=createBrowserRouter([
  {
    path:"/",
    element:<UserProvider><Layout/></UserProvider>,
    errorElement:<NotFound/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/projet",
        element:<Projet/>
      },
      {
        path:"/propos",
        element:<Apropos/>
      },
      {
        path:"/education",
        element:<Education/>
      }
    ]
  }
])
function App() {
  return (
    <div className="container">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
