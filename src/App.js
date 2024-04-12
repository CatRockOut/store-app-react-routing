import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'
import ContactInfo from './pages/ContactInfo/ContactInfo';
import ShipmentInfo from './pages/ShipmentInfo/ShipmentInfo';
import ConfirmOrder from './pages/ConfirmOrder/ConfirmOrder';
import NotFound from './pages/NotFound/NotFound';
import './App.css';

function App() {
    return (
        <BrowserRouter basename="/store-app-react-routing">
            <div className="App">
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/contact" element={<ContactInfo />} />
                        <Route path="/shipment" element={<ShipmentInfo />} />
                        <Route path="/confirm" element={<ConfirmOrder />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
