import React from 'react'
import Home from './Home'
import {Container,Row,Col} from 'react-bootstrap'
import { Routes ,Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Error from './pages/Error';
import Login from './components/Login'
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import {UserAuthContextProvider} from './context/UserAuthContext';
const App = () => {
 return (
 
    <Row>
      <Col>
      <UserAuthContextProvider>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='*' element={<Error/>} />
       
       
      </Routes>
      </UserAuthContextProvider>
      </Col>
    </Row>
);
}

export default App
