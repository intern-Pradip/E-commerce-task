import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Products from '../components/Products';
import Navbar from '../components/Navbar';

function Category() {
    const [category, setCategory] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const getCategory = await axios.get(`https://fakestoreapi.com/products/category/${type}`);
                setCategory(getCategory.data);
            } catch (err) {
                console.error('no category found', err);
            }
        };
        fetchData();
    }, [category]);

    return (
        <>
            <Navbar />
            {category && <Products products={category} />}
        </>
    );
}

export default Category;
