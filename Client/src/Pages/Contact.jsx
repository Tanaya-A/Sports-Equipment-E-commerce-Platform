import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="py-16">
            <div
                className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
            >
                {/* Contact Information */}
                <div
                    className="flex flex-col justify-between"
                    data-aos="fade-right"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's Talk!</h2>
                        <img src="/Contact us.svg" alt="Contact Us" className="p-6 h-52 md:h-64" />

                        <p className="">
                            Reach out to us for any inquiries, feedback, or assistance. We are here to help!
                        </p>

                        <div className="space-y-2">
                            <p>
                                <strong>Email:</strong> <a href="mailto:contact@bdsports.com" className="text-cyan-600 hover:underline">contact@bdsports.com</a>
                            </p>
                            <p>
                                <strong>Phone:</strong> <a href="tel:+880123456789" className="text-cyan-600 hover:underline">+880-123-456789</a>
                            </p>
                            <p>
                                <strong>Address:</strong> Bashundhara, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    noValidate=""
                    className="space-y-6"
                    data-aos="fade-left"
                >
                    <div>
                        <label htmlFor="name" className="text-sm">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Your Message"
                            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-cyan-600 text-gray-50 hover:bg-cyan-700 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
