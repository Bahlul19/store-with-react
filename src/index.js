import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const customRouter = (
//   <Router>
//     <div>
//       <Route exact="/" component={HomePage}></Route>
//       <Route path="/shop/hats"></Route>
//       <Route path="/shop/jackets"></Route>
//       <Route path="/shop/sneakers"></Route>
//       <Route path="/shop/womens"></Route>
//       <Route path="/shop/mens"></Route>
//     </div>
//   </Router>
// );

// reactDom.render(customRouter,document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById('root')
  );

reportWebVitals();
