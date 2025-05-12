// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow py-4 px-6 flex items-center justify-between">
      <div className="font-bold text-xl">
        <p>Tanush R. Kumar</p>
        </div>
     
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-500">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;