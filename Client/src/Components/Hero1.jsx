import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router';

const Hero1 = () => {
    return (
        <>
            <section className="md:pt-24 md:pb-20">
                <div className="px-6  mx-auto lg:flex lg:items-center lg:gap-12">
                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl font-bold leading-tight  md:text-5xl dark:text-white">
                            Gear Up for Your Next Adventure
                        </h1>
                        <p className="mt-4 text-lg text-primary md:mt-6 md:text-xl dark:text-gray-500">
                            Discover the best in sports equipment and apparel, crafted for performance and durability. Whether you're a professional or a hobbyist, we have everything you need to excel.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <Link
                                to="/all-products"
                                className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#0FABCA] rounded-lg shadow-md hover:bg-[#01849b] focus:ring-4  "
                            >
                                Explore Products
                                <FaArrowRight className="ml-2" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 text-[#0FABCA] border border-[#01849b] rounded-lg hover:bg-[#173c42] hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="mt-8 lg:mt-0 lg:w-1/2">
                        <img
                            src="https://koala.sh/api/image/v2-91w7n-dhftf.jpg?width=1344&height=768&dream"
                            alt="Sports equipment"
                            className="w-full rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero1;
