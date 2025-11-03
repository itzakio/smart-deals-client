import React from 'react';
import { IoSearch } from 'react-icons/io5';
import leftImg from "../assets/bg-hero-left.png"
import rightImg from "../assets/bg-hero-right.png"

const Banner = () => {
    return (
        <section className="text-center py-16 space-y-6 flex flex-col justify-center items-center bg-linear-to-tl from-[#E0F8F5] to-[#FFE6FD]">
            <h2 className='text-6xl font-bold '>Deal your Products <br />in a Smart way !</h2>
            <p className='text-accent'>SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>
            <div className='h-10 mx-auto w-2/3 md:w-1/2 lg:w-1/3 relative active:scale-99 transition-all duration-75'>
                <input type="text" placeholder='search For Products, Categories...' className='bg-white shadow-sm w-full h-full outline-0 rounded-full px-8'/>
                <button className='h-10 w-10 bg-gradient flex justify-center items-center rounded-r-full absolute right-0 top-0 cursor-pointer '><IoSearch size={20} className='text-white' /></button>
            </div>
            <div className='flex gap-4'>
                
                <button className='btn bg-gradient text-white'>Watch All Products</button>
                <button className='btn '>Post an Product</button>
            </div>
        </section>
    );
};

export default Banner;