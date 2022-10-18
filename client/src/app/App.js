import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavGuy from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import AdminLogin from '../pages/Admin/AdminLogin'
import AdminPage from '../pages/Admin/AdminPage'
import Client from '../pages/Client/Client'
import Home from '../pages/Home/Home'
import Provider from '../pages/Provider/Provider'
import Whoops from '../pages/Whoops'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'

function App() {
    const token = window.localStorage.getItem('api_token');
    const isLoggedIn =  (token) ? true : false;
    console.log(token, 'token');
    
    return (
         <Router >
         <NavGuy isLoggedIn={isLoggedIn} />
         <Switch>                
             <Route exact path="/">
               {(isLoggedIn) ?    
                   <Dashboard />
                   :
                   <Home />
                   
               } 
             </Route>  
             <Route path="/home">
                 <Home/>
             </Route>               
             <Route path="/signup">
                 <Signup/>
             </Route>                
             <Route path="/login">
                 <Login/>
             </Route>                
             <Route path="/adminLogin">
                 <AdminLogin/>
             </Route>                
             <Route path="/adminPage">
                 <AdminPage/>
             </Route>                
             <Route path="/contact">
                 <Client/>
             </Route>
             <Route path="/provider">
                 <Provider/>
             </Route>
             <Route path="/*" >
                 <Whoops/>
             </Route>
             <Route path="/contacts/delete/:id">
                 <deleteClient/>
             </Route>
             <Route path="/contacts/update/:id">
                 <updateClient/>
             </Route>
         </Switch>
             <Footer id='footer'/>
     </Router>
    )
}
export default App