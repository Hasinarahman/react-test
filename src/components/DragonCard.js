import React from 'react';
import { useDragons } from '../context/DragonsContext';

const DragonCard = ({ dragon }) => {
  const { toggleReservation } = useDragons();

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 m-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <img className="w-full h-48 object-cover" src={dragon.flickr_images[0]} alt={`Dragon ${dragon.name}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{dragon.name}</div>
        <p className="text-gray-300 text-base">
          {dragon.description}
        </p>
        <button
          onClick={() => toggleReservation(dragon.id)}
          className={`mt-4 py-2 px-4 rounded ${dragon.isReserved ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold transition-colors duration-300`}
        >
          {dragon.isReserved ? 'Cancel Reservation' : 'Reserve'}
        </button>
      </div>
    </div>
  );
};

export default DragonCard;
