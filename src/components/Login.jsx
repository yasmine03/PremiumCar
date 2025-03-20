import React from "react";
import bon1 from "../assets/images/bon1.png";

const Login = () => {
  return (
    <div className="bg-orange-400 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Texte et description */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Location de voiture
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-black">
              Meilleure application à Babi
            </h2>
            <p className="text-lg leading-8 tracking-wide text-black">
              Votre meilleure app de location de voiture. Nous vous offrons
              <span className="font-semibold"> 10% de réduction </span> sur votre première location.
              T'attends quoi ? Viens rouler avec les vrais wés dans Babi !
            </p>
            <button className="bg-black text-orange-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Book Now
            </button>
          </div>

          {/* Image et formulaire */}
          <div className="space-y-6">
            <div className="text-center">
              <img src={bon1} alt="Voiture" className="w-full max-w-md mx-auto" />
            </div>
            <div className="bg-black text-white py-3 px-5 rounded-lg text-center uppercase text-lg">
              Réserve ta bagnole
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form className="space-y-4">
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  type="text"
                  placeholder="Nom"
                />
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  type="text"
                  placeholder="Prénoms"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-400 text-black py-2 rounded-lg font-semibold hover:bg-orange-500 transition"
                >
                  Réserver Maintenant
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
