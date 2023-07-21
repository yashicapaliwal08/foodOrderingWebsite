import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Header } from '../components/Header';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import PaymentSuccess from '../pages/PaymentSuccess';
import Register from '../pages/Register';
import { useSelector } from 'react-redux';
import { cartProducts } from '../stores/cart/cartSlice';
import { Footer } from '../components/Footer';
//Route to render some UI when path matches the current Url
const Navigation=()=>{
    const productsInCart = useSelector(cartProducts);//return all products in the cart
    return (
        <BrowserRouter>
            <Header cartCount={productsInCart?productsInCart.length:0}/>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/payment-success" element={<PaymentSuccess/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Navigation;