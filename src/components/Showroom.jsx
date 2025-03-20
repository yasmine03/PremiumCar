import React from "react";
import car9 from "../assets/images/car9.png";
import car6 from "../assets/images/car6.png";
import car7 from "../assets/images/car7.png";
import car8 from "../assets/images/car8.png";

const Showroom = () => {
  const cars = [
    {
      image: car6,
      name: "BMW Série 3",
      year: 2018,
      owner: "Mamadou Koné",
      price: "75,000 CFA/jour",
      available: true,
    },
    {
      image: car7,
      name: "Audi Q7",
      year: 2021,
      owner: "Aïcha Diabaté",
      price: "120,000 CFA/jour",
      available: false,
    },
    {
      image: car8,
      name: "Toyota Land Cruiser",
      year: 2019,
      owner: "Adama Traoré",
      price: "90,000 CFA/jour",
      available: true,
    },
    {
      image: car9,
      name: "Range Rover Sport",
      year: 2022,
      owner: "Fatoumata Ouattara",
      price: "150,000 CFA/jour",
      available: true,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Nos catalogues de voitures</h1>
        <p className="text-lg text-gray-600">
          Découvrez notre collection de voitures disponibles à la location. Trouvez celle qui correspond à vos besoins et à votre style.
        </p>
      </div>

      {/* Showroom Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-5 flex flex-col items-center"
          >
            {/* Car Image */}
            <img
              src={car.image}
              alt={car.name}
              className="w-full max-w-[200px] object-contain mb-4"
            />
            {/* Car Details */}
            <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
            <p className="text-gray-600">Année : {car.year}</p>
            <p className="text-gray-600">Propriétaire : {car.owner}</p>
            <p
              className={`text-sm font-semibold ${
                car.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {car.available ? "Disponible" : "Non disponible"}
            </p>
            <p className="text-lg font-semibold text-orange-500">{car.price}</p>
            {/* Rent Button */}
            <button
              className={`mt-4 px-6 py-2 font-semibold rounded-lg transition-all ${
                car.available
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              disabled={!car.available}
            >
              Louer maintenant
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showroom;
