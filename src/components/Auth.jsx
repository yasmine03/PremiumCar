import React from 'react';

const AuthPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Formulaire d'authentification</h1>

        <form className="space-y-4">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              placeholder="Entrez votre nom"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-400 focus:border-orange-400"
            />
          </div>

          {/* Prénom */}
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              placeholder="Entrez votre prénom"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-400 focus:border-orange-400"
            />
          </div>

          <div>
            <label htmlFor="dateNaissance" className="block text-sm font-medium text-gray-700">
              Date de naissance
            </label>
            <input
              type="date"
              id="dateNaissance"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-400 focus:border-orange-400"
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-700">
              As-tu une voiture ?
            </span>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="voiture"
                  value="oui"
                  className="text-orange-400 focus:ring-orange-400"
                />
                <span className="ml-2">Oui</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="voiture"
                  value="non"
                  className="text-orange-400 focus:ring-orange-400"
                />
                <span className="ml-2">Non</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-500 transition"
          >
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
