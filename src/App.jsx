import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import AboutUs from './components/Aboutus';
import Review from './components/Review';
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reviews" element={<Review />} />

      </Routes>


    </>
  );
}

export default App
