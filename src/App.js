import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import AddProduct from './components/AddProduct';
import Allproducts from './components/Allproducts';
import About from './components/About';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/signup" element={<SignUpForm />} />
          <Route path="/user/login" element={<LoginForm />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
