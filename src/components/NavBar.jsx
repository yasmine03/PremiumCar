import React from "react";

// Données des liens de navigation
const NavLinks = [
  { id: "1", name: "Home", page: "home" },
  { id: "2", name: "About", page: "about" },
  { id: "3", name: "Showroom", page: "showroom" },
  { id: "4", name: "Search", page: "search" },
  { id: "5", name: "Auth", page: "auth" },
];

const NavBar = ({ navigateTo }) => {
  return (
    <nav className="bg shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-green-900 tracking-wider">
            Premium Car
          </h1>

          <ul className="flex items-center gap-8">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => navigateTo(link.page)} 
                  className="text-dark-300 text-lg font-medium hover:text-orange-500 transition duration-300"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
