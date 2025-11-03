import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({product}) => {
    const {_id, title, image, price_max, price_min} = product;
    return (
        <div className='p-4 bg-white shadow-sm rounded-lg space-y-2'>
            <img className='w-full h-72 object-cover rounded-lg' src={image} alt="" />
            <h2 className='text-2xl font-medium'>{title}</h2>
            <p className='text-2xl font-semibold text-gradient'>${price_min}-{price_max}</p>
            <Link to={`/product-details/${_id}`} className='cursor-pointer btn p-2 rounded-sm border-2 border-primary text-primary w-full'>View Details</Link>
        </div>
    );
};

export default ProductCard;