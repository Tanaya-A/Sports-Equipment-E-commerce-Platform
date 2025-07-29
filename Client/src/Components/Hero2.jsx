import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router';

const Hero2 = () => {
    return (
        <section className="relative ">
            {/* Background Decoration */}
            <div className="absolute inset-0 "></div>

            <div className="relative px-6 py-16 mx-auto  lg:flex lg:items-center lg:gap-12">
                {/* Left Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl dark:text-white">
                        Discover Top-Tier Sports Gear
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 sm:mt-6 sm:text-xl">
                        Elevate your game with our premium collection of sports equipment, designed for athletes who demand the best.
                    </p>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <Link
                            to="/all-products"
                            className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                            Shop Now
                            <FaArrowRight className="ml-2" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Right Content */}
                <div className="mt-12 lg:mt-0 lg:w-1/2">
                    <div className="relative">
                        <img
                            src="https://cdn.thewirecutter.com/wp-content/media/2024/03/treadmills-2048px-09625.jpg"
                            alt="Sports gear showcase"
                            className="rounded-lg shadow-md"
                        />
                        <div className="absolute top-0 right-0 mt-4 mr-4 bg-red-400 rounded-full shadow-lg p-4">
                            <p className="text-sm text-white">
                                New Arrivals!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2;
