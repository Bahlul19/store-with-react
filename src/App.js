import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import Header from './components/header/header.component';

// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );

function App() {
  return (
    <div>

      <Header />

       <Route exact path="/" component={HomePage} />
       <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;

