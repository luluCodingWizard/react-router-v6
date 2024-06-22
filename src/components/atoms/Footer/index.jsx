import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">© 2024 My Simple Footer</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
