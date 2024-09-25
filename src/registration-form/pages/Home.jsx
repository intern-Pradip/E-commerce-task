import React, { useEffect, useState } from 'react'
import Products from '../components/Products';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Home() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                setProducts(response.data);
            } catch (err) {
                console.error('No products found', err);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <Navbar />
            {products && <Products products={products} />}
        </div>
    )
}

export default Home
