import React from 'react';
import {ProtectedRoute ,PublicRoute} from './protection'
import { BrowserRouter  as Router,Routes ,Route } from "react-router-dom";
import  Login  from '../auth/Login.js'
// import  Register  from '../auth/Register.js'
import DemoRegister from '../pages/Demo.jsx';
import Dashboard from '../pages/Dashboard.jsx'
import Library from '../pages/library/Library.jsx'

import Page from '../pages/Page.jsx';
import {useAuthentication} from '../auth';
import { Navigate } from 'react-router-dom';
const AppRouters = ()=> {
  const {isAuthorized} = useAuthentication()
  const ProtectedLogin =() => {
    return isAuthorized ? <Navigate to='/' />: <Page initiMethod='/login'/>
  }
  const ProtectedRegister =() => {
    return isAuthorized ? <Navigate to='/' />: <Page initiMethod='/register'/>
  }

  return (
    <Router>
        <Routes>    
            {/* <Route path="" element={<PublicRoute><Login/></PublicRoute>}/> */}
            {/* <Route path='/login' element={<PublicRoute><Login/></PublicRoute>} /> */}
            {/* <Route path='/register' element={<PublicRoute><DemoRegister/></PublicRoute>}/> */}
            <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path='/library' element={<ProtectedRoute><Library/></ProtectedRoute>}/>
            <Route path='/form' element={<Page/>}/>
            <Route path='' element={< ProtectedLogin/>}/>
            {/* <Route path="/register" element={<Register/>}/> */}
        </Routes>
    </Router>
  );
};

export default AppRouters;




