import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase";
import { Button  } from 'reactstrap';


firebase.initializeApp({
    apiKey: "AIzaSyAKOvv93a-Vs9dCMHzG5AvXLZvHK8qXEKA",
    authDomain: "secret-carving-314620.firebaseapp.com",
  });
  class Signin extends Component {
    state = {
      isSignedIn: false ,
   
    };
    uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      }
    };
  
    componentDidMount() {
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
          (user) => this.setState({isSignedIn: !!user})
      );
  
    }
  
    componentWillUnmount() {
      this.unregisterAuthObserver();
  
    }
  
    render() {
        if (!this.state.isSignedIn) {
          return (
            <div className="signinform">
              <h1>welcome</h1>
              
            <div className="signinform2"> 
            <p>Please sign in</p>
              <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                   </div> 
                 
      
    
            </div>
          );
        }
    
        return (  <div className="signedin">
           <h5>welcome {firebase.auth().currentUser.displayName}</h5>
            <img src="/images/—Pngtree—true sign png_4863856.png" alt="#"/>
           <br />
              <Button color="danger" onClick={() => firebase.auth().signOut()}>signout</Button> 
          </div>);
    }
  
  
  }

export default Signin

