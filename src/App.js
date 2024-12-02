import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home';
import AboutUs from './screens/about/AboutUs';
import ContactUs from './screens/contact/ContactUs';
import ProductList from './components/productList/ProductList';
import ProductDetail from './screens/productDetail/ProductDetail';
import Cart from './components/cart/Cart';
import { useState } from 'react';
import CartContext from './context/CartContext';



function App() {
  const [searchText, setSearchText] = useState('')
  function onSearchChange(text) {
    setSearchText(text)
  }

  const [cartProd, setCartProd] = useState([])

  function addToCart(product) {
    setCartProd([...cartProd, product]);
  }

  return (
    <div>
      <CartContext.Provider value={{
        cartProducts: cartProd,
        onAdcClick: addToCart
      }}>
        <Header onSearchChange={onSearchChange} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reactjs-ecom-app' element={<Home />} />
          <Route path='/products' element={<ProductList searchText={searchText} />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path='/about us' element={<AboutUs />} />
          <Route path='/contact us' element={<ContactUs />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartContext.Provider>

    </div>
  );
}

export default App;
