import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router';


const Hero = () => {
    return (
        <>
        <section className="">
            <div className="grid  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Premium Sports Equipment for Every Athlete
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        From top-quality gear to apparel, we provide everything you need to stay at the top of your game.
                    </p>
                    <Link to="/all-products" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Shop Now
                        <FaArrowRightLong className='mx-2' />

                    </Link>
                    
                </div>
                <div className="  lg:mt-0 lg:col-span-5 ">
                    <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/02/sportsstore2.jpg" alt="Sports equipment display" />
                </div>                
            </div>
        </section>
        </>
    );
};

export default Hero;
