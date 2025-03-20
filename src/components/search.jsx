import React from "react";
import car2 from "../assets/images/car2.png";
import bon1 from "../assets/images/bon1.png";
import car4 from "../assets/images/car4.png";

const AnimatedCars = () => {
  const cars = [car2, bon1, car4];

  return (
    <div className="relative bg-[#eef0fc] h-[350px] overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[300px] w-full text-center">
        <h2 className="text-lg text-black">Trouvez votre voiture de rêve à Babi</h2>
        <h1 className="text-[40px] sm:text-[50px] font-bold text-black">
          Loue ta voiture idéale
        </h1>
      </div>

      {/* Animated Cars */}
      <div className="absolute bottom-[-20px] w-full h-[150px] flex overflow-hidden">
        <div className="flex gap-10 animate-cars">
          {cars.map((car, index) => (
            <img
              key={index}
              src={car}
              alt={`Car ${index}`}
              className="h-[100px] object-contain"
            />
          ))}
          {cars.map((car, index) => (
            <img
              key={index + cars.length}
              src={car}
              alt={`Car ${index}`}
              className="h-[100px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCars;
