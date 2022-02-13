import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch  } from "react-router-dom";
import Store from "./Cartfolder/Store";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Signin from "./components/Signin";
import Aboutus from "./components/Aboutus";
import Signname from "./components/Signname";
import Contactus from "./components/Contactus";
import Newcars from "./Newcars";
import Usedcars from "./Usedcars";
import Cart from "./Cartfolder/Cart";
import Newcardetail from "./Newcardetail";
import Usedcardetail from "./Usedcardetail";
import Carticon from "./Cartfolder/Carticon";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 

} from 'reactstrap';

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Provider store={Store}>
    <BrowserRouter>
    
    <div>
      <Navbar dark  expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nnnn" navbar >
            <NavItem>
              <NavLink className="NavLink" to="/" >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="NavLink" to="/Aboutus" >About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="NavLink" to="/Newcars" >New Cars</NavLink>
            </NavItem>
            <NavItem>

            <NavbarBrand  className="Navbrand" ><span style={{color:'#ff3837'}}>A</span>cars</NavbarBrand>
            </NavItem>

            <NavItem>
              <NavLink className="NavLink" to="/Usedcars" >Used Cars</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="NavLink" to="/Contactus">Contact us</NavLink>
            </NavItem>
            <NavItem>
           <Signname />
         </NavItem>
         <NavItem >
              <Carticon />
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
      <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/Newcars" component={Newcars} exact></Route>
              <Route path="/Usedcars" component={Usedcars} exact></Route>
              <Route path="/Usedcars/:id" component={Usedcardetail} exact></Route>

              <Route path="/Aboutus" component={Aboutus} exact></Route>
              <Route path="/Contactus" component={Contactus} exact></Route>
              <Route path="/Signin" component={Signin} exact></Route>
              <Route path="/Newcars/:id" component={Newcardetail} exact></Route>
              <Route path="/Cart" component={Cart} exact></Route>
   </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;


