import React from 'react';

const FoodItem = ({ name, ingredients, price }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <div>
        <h3 className="text-xl lg:text-2xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm lg:text-lg">{ingredients}</p>
      </div>
      <div className="text-right">
        <span className="text-xl lg:text-3xl font-semibold">{price}</span>
      </div>
    </div>
  );
};

export default FoodItem;