import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar.js';
import {Container} from 'react-bootstrap';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Cancel from './pages/cancel';
import Store from './pages/store';
import Success from './pages/success';
import CartProvider from './CartContext';

function App() {
  return (
       <CartProvider>
     <Container>
    <NavbarComponent></NavbarComponent> <BrowserRouter>
    <Routes>
    <Route index element = {
      < Store / >
    }
    /> <
    Route path = "success"
    element = {
      < Success / >
    }
    /> <
    Route path = "cancel"
    element = {
      < Cancel / >
    }
    /> <
    /Routes> <
    /BrowserRouter> <
    /Container>
    </CartProvider>
  );
}

export default App;



