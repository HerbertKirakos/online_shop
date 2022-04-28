import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'

import { HomePage } from "../src/pages/HomePage";
import { AuthenticationPage, ShippingPage } from "./pages";
import { CartPage } from "./pages/CartPage";
import { ProductPage } from "./pages/ProductPage";
import { store } from "./store";
import { AllProductsPage } from "./pages/AllProductsPage";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                  <Route path='/' element={<HomePage/>} />
                  <Route path='/product/:id' element={<ProductPage/>} />
                  <Route path='/all-products' element={<AllProductsPage/>} />
                  <Route path='/cart' element={<CartPage/>} />
                  <Route path='/authentication' element={<AuthenticationPage/>} />
                  <Route path='/shipping' element={<ShippingPage/>} />
                </Routes>
            </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
