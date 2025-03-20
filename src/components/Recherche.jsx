import React from 'react'


const Recherche = () => {
  return (
    <div> <label>
    Choisissez un fruit :
    <select name="selectedFruit">
      <option value="apple">Pomme</option>
      <option value="banana">Banane</option>
      <option value="orange">Orange</option>
    </select>
  </label></div>
  )
}

export default Recherche