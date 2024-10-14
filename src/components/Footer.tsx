import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="container">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Santa's Workshop. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
