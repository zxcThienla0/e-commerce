import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/cart/CartContext';
import bgIMG from "../pngshki/bgImg.jpg"

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import Cart from './components/Pages/Cart';

import AboutPage from './components/Pages/About';
import ShippingPage from './components/Pages/shipping';
import ReturnsPage from './components/Pages/Returns';
import FAQPage from './components/Pages/Faq';
import PrivacyPage from './components/Pages/Privacy';
import TermsPage from './components/Pages/Terms';

function App() {
  return (
    <Router>
      <div style={{
        backgroundImage: `url(${bgIMG})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        minHeight: "100vh",
      }}
        className="w-full"
      >
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/e-commerce/" element={<Home />} />
            <Route path="/e-commerce/shop" element={<Shop />} />
            <Route path="/e-commerce/cart" element={<Cart />} />
            <Route path="/e-commerce/about" element={<AboutPage />} />
            <Route path="/e-commerce/shipping" element={<ShippingPage />} />
            <Route path="/e-commerce/returns" element={<ReturnsPage />} />
            <Route path="/e-commerce/faq" element={<FAQPage />} />
            <Route path="/e-commerce/privacy" element={<PrivacyPage />} />
            <Route path="/e-commerce/terms" element={<TermsPage />} />
          </Routes>
          <Footer />
        </CartProvider>
      </div>
    </Router>
  )
}

export default App
