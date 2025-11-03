import React from 'react';
import useFetchData from '../hooks/useFetchData';
import ProductCard from './ProductCard';
import Loading from './Loading';

const LatestProducts = () => {
    const {data:latestProducts, loading, error} = useFetchData("http://localhost:3000/latest-products")
    console.log(latestProducts);
    return (
        <div className='max-w-7xl mx-auto px-8 xl:px-0'>
            <h2 className='text-5xl font-bold text-center py-8'>Recent <span className='text-gradient'>Products</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                {
                    loading?(
                        <div className='col-span-full'><Loading/></div>
                    ):(
                        latestProducts.map(product => <ProductCard key={product._id} product={product}/>)
                    )
                }
            </div>
        </div>
    );
};

export default LatestProducts;