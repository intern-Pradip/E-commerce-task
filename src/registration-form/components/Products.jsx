import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Products({ products }) {
    const [filter, setFilter] = useState('');

    const handleFilterData = (e) => {
        setFilter(e.target.value.toLowerCase());
    };

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(filter)
    );

    return (
        <>
            <form class="max-w-md mx-auto">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative mt-40">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={handleFilterData} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products" required />
                </div>
            </form>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {filteredProducts.map((item) => (
                            <Link to={`/home/products/${item.id}`} key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={item.image} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                    <p className="mt-1">${item.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products;
