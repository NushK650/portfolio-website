
import React from 'react';

function Header() {
  return (
    
    <div className="bg-white shadow py-4 px-6 fixed top-0 left-0 right-0 z-50  items-center flex justify-between">
      <div className="font-bold text-xl">
        <p>Tanush R. Kumar</p>
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li><a href="" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
