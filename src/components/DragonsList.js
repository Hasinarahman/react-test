import React from 'react';
import { useSelector } from 'react-redux';
import DragonCard from './DragonCard';

const DragonList = () => {
  const dragons = useSelector((state) => state.dragons.dragons);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Dragons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dragons.map((dragon) => (
          <DragonCard key={dragon.id} dragon={dragon} />
        ))}
      </div>
    </div>
  );
};

export default DragonList;
