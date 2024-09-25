import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import Register from '../pages/Register';
import ProductDescription from '../pages/ProductDescription';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Category from '../pages/Category';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route path='/' element={<Login />} />
            <Route path='registerUser' element={<Register />} />
            <Route path='home' element={<Home />} />
            <Route path='home/products/:id' element={<ProductDescription />} />
            <Route path='products/:type' element={<Category/>}/>
            <Route path='cart' element={<Cart />} />
        </Route>
    )
);
