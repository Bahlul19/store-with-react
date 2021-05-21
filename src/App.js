import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';

import React from 'react';
//using from library



//taking a class with the replacement of previous function
class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      currentUser : null
    }
  }


  unscribeFromAuth = null;


  //checking which user are login or logout from the google account on this APPLICATION
  componentDidMount(){
    
    // auth.onAuthStateChanged(user => {
    //   this.setState({currentUser : user});
    //   console.log(user);
    // });

    this.unscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState( {currentUser : user} );
      console.log(user)
    });
  }

  //unmount the login
  componentWillUnmount(){
    this.unscribeFromAuth();
  }

  render(){
    return(
      <div>
  
        <Header />
  
         <Route exact path="/" component={HomePage} />
         <Route path="/shop" component={ShopPage} />
         <Route path="/signin" component={SignInAndSignUpPage}/>
      </div>
  )};
}


export default App;

