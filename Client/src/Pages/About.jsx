import React from "react";
import { Link } from "react-router";
import { FaRegHandPointer } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <section className="about-section  py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-[#01849b]">About Us</h1>
          <p className="text-xl text-gray-400 mt-4">We are an e-commerce platform focused on providing top-notch sports equipment and accessories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-aos="fade-up">
          <div className="about-card bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#01849b]">Our Mission</h2>
            <p className="text-gray-400 mt-4">
              Our mission is to make high-quality sports equipment accessible to everyone, enabling athletes to reach their full potential.
            </p>
          </div>

          <div className="about-card bg-white p-6 rounded-lg shadow-lg" data-aos="zoom-in">
            <h2 className="text-2xl font-semibold text-[#01849b]">Our Vision</h2>
            <p className="text-gray-400 mt-4">
              We envision a world where every athlete, regardless of skill level, has access to the best sports gear, leading to healthier lifestyles and improved performance.
            </p>
          </div>

          <div className="about-card bg-white p-6 rounded-lg shadow-lg" data-aos="fade-left">
            <h2 className="text-2xl font-semibold text-[#01849b]">Our Values</h2>
            <ul className="text-gray-400 mt-4 list-disc pl-6">
              <li>Integrity</li>
              <li>Customer Focus</li>
              <li>Innovation</li>
              <li>Passion for Sports</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#01849b]">Meet Our Team</h2>
          <p className="text-xl text-gray-400 mt-4">
            Our team consists of passionate individuals who are dedicated to bringing you the best in sports equipment.
          </p>
        </div>

        <div className="team-section mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example Team Member */}
          <div className="team-member bg-white p-6 rounded-lg shadow-lg text-center" data-aos="zoom-in-up">
            <img src="https://www.n2growth.com/wp-content/uploads/2019/08/happy-ceo-at-desk.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-[#01849b] mt-4">John Doe</h3>
            <p className="text-gray-400">Founder & CEO</p>
          </div>

          <div className="team-member bg-white p-6 rounded-lg shadow-lg text-center" data-aos="zoom-in-up">
            <img src="https://www.n2growth.com/wp-content/uploads/2019/08/happy-ceo-at-desk.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-[#01849b] mt-4">Jane Smith</h3>
            <p className="text-gray-400">Marketing Head</p>
          </div>

          <div className="team-member bg-white p-6 rounded-lg shadow-lg text-center" data-aos="zoom-in-up">
            <img src="https://www.n2growth.com/wp-content/uploads/2019/08/happy-ceo-at-desk.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-[#01849b] mt-4">Emily White</h3>
            <p className="text-gray-400">Product Specialist</p>
          </div>

          <div className="team-member bg-white p-6 rounded-lg shadow-lg text-center" data-aos="zoom-in-up">
            <img src="https://www.n2growth.com/wp-content/uploads/2019/08/happy-ceo-at-desk.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-[#01849b] mt-4">Mark Johnson</h3>
            <p className="text-gray-400">Customer Support</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#01849b]" data-aos="fade-up">Join Us Today</h2>
          <p className="text-lg text-gray-400 mt-4" data-aos="fade-up">
            Become part of our growing community and explore the world of top-quality sports equipment and accessories.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block py-3 px-6 bg-[#01849b] text-white text-lg rounded-md hover:bg-[#017F8A] transition duration-300"
            data-aos="fade-up"
          >
            Get in Touch <FaRegHandPointer className="inline ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
