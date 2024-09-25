import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductDetails from '../components/ProductDetails';
import Navbar from '../components/Navbar';

function ProductDescription() {

  const [products, setProducts] = useState({})
  const { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProduct = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProducts(getProduct.data);
      } catch (err) {
        console.error('No product found', err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      {products && <ProductDetails product={products} />}
    </div>
  )
}

export default ProductDescription;
