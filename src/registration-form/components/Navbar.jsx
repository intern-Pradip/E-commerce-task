import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/categories');
                setCategories(response.data);
            } catch (err) {
                console.log(err, 'no data found');
            }
        };
        fetchData();
    }, []);

    return (
            <header className="text-gray-600 body-font z-10 shadow-xl fixed top-0 left-0 right-0 bg-slate-400">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <Link to='/home' className="flex title-font cursor-pointer font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        {categories.map((category) => (
                            <Link
                                to={`/products/${category}`}
                                className="mr-5 hover:text-yellow-900 cursor-pointer focus:text-white"
                            >
                                {category.toUpperCase()}
                            </Link>
                        ))}
                    </nav>
                    <Link to='/cart'> <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded hover:text-white mt-4 md:mt-0">
                        Add To Cart
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    </Link>
                </div>
            </header>
    );
}

export default Navbar;
