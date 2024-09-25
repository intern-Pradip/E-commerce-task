import React from 'react'

function Categories({ products }) {
    return (
        <div>
            {products.map((item) => {
                return <h2>{item.title}</h2>
            })}
        </div>
    )
}

export default Categories
