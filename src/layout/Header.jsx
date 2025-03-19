import React from "react";

export const Header = () => {
  return (
    <header className="header bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">DukeTranslation</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Servicios
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
