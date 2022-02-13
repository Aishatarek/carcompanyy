import React, { Component } from 'react'
import {  NavLink, Link  } from "react-router-dom";
import firebase from "firebase";
export class Signname extends Component {
   
    state = {
      isSignedIn: false,
  
    };
    componentDidMount() {
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({ isSignedIn: !!user })
      );
  
    }
    render() {
        return (
            <div>
                 {this.state.isSignedIn ? (<div style={{textAlign: "center"}}> <h5>welcome {firebase.auth().currentUser.displayName}</h5>
                  <Link className="NavLink" onClick={() => firebase.auth().signOut()}>signout</Link> </div>) : <NavLink className="NavLink" to="/Signin" >Signin</NavLink>}
            </div>
        )
    }
}

export default Signname;
