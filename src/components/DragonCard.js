import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleReservation } from '../redux/dragonsSlice';

const DragonCard = ({ dragon }) => {
  const dispatch = useDispatch();

  const handleReservation = () => {
    dispatch(toggleReservation(dragon.id));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={dragon.image} alt={dragon.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{dragon.name}</h2>
        <p className="text-gray-700 mb-4">{dragon.description}</p>
        <button
          onClick={handleReservation}
          className={`${
            dragon.reserved ? 'bg-red-500' : 'bg-blue-500'
          } text-white px-4 py-2 rounded-md`}
        >
          {dragon.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
        </button>
      </div>
    </div>
  );
};

export default DragonCard;
