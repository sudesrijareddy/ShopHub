import './App.css';
import Home from './Components/Home';
import NavbarComp from './Components/NavbarComp';
import Shop from './Components/Shop';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Categories from './Components/Categories';
import Wishlist from './Components/Wishlist';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import PageNotFound from './Components/PageNotFound';
function App() {
  
  return (
    <div className="App">
      {<BrowserRouter>
      <NavbarComp/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:productId" element={<Shop />}/>
          <Route path="/category/:category" element={<Categories/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>}
    </div>
  );
}

export default App;
