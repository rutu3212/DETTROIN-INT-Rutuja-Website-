import { Link } from "react-router-dom";
import logo from "../src/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <img src={logo} alt="Kisaligarh School" className="h-10" />

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Academics", path: "/academics" },
            { name: "Admissions", path: "/admissions" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" },
            { name: "Dashboard", path: "/dashboard" },
          ].map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.path}
                className="hover:text-blue-800 transition"
              >
                {item.name}
              </Link>

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
}