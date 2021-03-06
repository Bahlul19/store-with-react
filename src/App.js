import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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

  unsubscribeFromAuth = null;

  componentDidMount(){

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
          
        });
        
      }

      else{
      this.setState({
        currentUser: userAuth
      });
    }

    }); 
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div>
  
        <Header currentUser={this.state.currentUser}/>
  
         <Route exact path="/" component={HomePage} />
         <Route path="/shop" component={ShopPage} />
         <Route path="/signin" component={SignInAndSignUpPage}/>
      </div>
  )};
}

export default App;


