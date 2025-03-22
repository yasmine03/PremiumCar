import React from "react";
import bon1 from "../assets/images/bon1.png";
import Search from "./search";

const Hero = () => {
  return (
    <div className="dark:bg-black dark:text-white duration-300">
      {/* Search Bar */}
      <div className="bg-gray-100 py-4 px-6">
        <Search />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto min-h-[620px] flex items-center justify-center px-6">
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="w-full flex justify-center">
            <img
              src={bon1}
              alt="Car Rental Service"
              className="rounded-lg max-w-full h-auto"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-orange-500 text-lg font-semibold uppercase">
              Fiabilité & Confort
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
              Trouvez la voiture parfaite pour <br />
              <span className="text-green-800">votre prochain voyage</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">

            Notre application facilite la location de voitures à Abidjan grâce à une réservation rapide, des tarifs transparents et une flotte variée adaptée à tous vos besoins
            . Profitez d’un service sécurisé et flexible pour vos déplacements en toute simplicité !
            </p>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a
                href="#booking"
                className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md font-medium text-lg hover:bg-green-600 transition duration-300"
              >
                Réserver
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
