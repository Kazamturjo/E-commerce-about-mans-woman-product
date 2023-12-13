import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ProductList from './Pages/Product/ProductList/ProductList';
import ProductID from './Pages/Product/ProductList/ProductID/ProductID';
import ProductDetails from './Pages/Product/ProductList/ProductID/Productsdelailts/ProductDetails';
import ProductPricing from './Pages/Product/ProductList/ProductID/ProductPricing/ProductPricing';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<ProductList/>}/>
    
    <Route path='product/:id' element={<ProductID/>}>
    <Route index  element={<ProductDetails/>}/>
    <Route path='pricing'  element={<ProductPricing/>}/>

    </Route>
   
    </Route>
    </Routes>
  
    
    </BrowserRouter>
  );
}

export default App;