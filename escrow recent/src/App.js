 /* import { Routes, Route } from 'react-router-dom'  */
 import Form from './components/form/form' 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
/* import Sidebar from './components/Sidebar/sidebar' */
/* import Navbar from './components/navbar/navbar' */
/* import {useState} from 'react' */
/* import Post from "./components/ConnectMetamask/post" */
import FirstPage from './components/ConnectMetamask/connectmetamask'
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoutes from './components/ProtectedRoute/ProtectedRoute'


function App () {
 /*  const [isOpen, setIsOpen] = useState(false) */

  /* const toggle = () => {
      setIsOpen(!isOpen)
  }; */
  return (
    <>
        <Router>
          {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
          {/* <Post></Post> */}
          <Routes>
              <Route path='/' exact element={<FirstPage/>}/>
              <Route element={<ProtectedRoutes/>}>
                <Route path='/escrowmoney' element={<Form/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
              </Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
