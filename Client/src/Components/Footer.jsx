import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-base-content p-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Website Name and Copyright */}
        <div className="text-center lg:text-left">
          <h1 className="text-xl font-bold text-red-500">BD<span className="text-green-500">Sports</span></h1>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved.</p>
        </div>

        {/* Contact Information */}
        <div className="mt-4 lg:mt-0 text-center lg:text-left">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <ul>
            <li>Email: contact@bdsports.com</li>
            <li>Phone: +880-123-456789</li>
            <li>Address: Bashundhara, Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 lg:mt-0">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex justify-center lg:justify-start space-x-4 mt-2">
            {/* GitHub */}
            <a
              href="https://github.com/abujaforhadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black"
            >
              <FaGithub size={24} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abujaforhadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <FaLinkedinIn size={24} />
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <FaFacebookF size={24} />
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
