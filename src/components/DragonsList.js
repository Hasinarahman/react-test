import React, { useEffect } from 'react';
import { useDragons } from '../context/DragonsContext';
import DragonCard from './DragonCard';

const DragonsList = () => {
  const { dragons, fetchDragons } = useDragons();

  useEffect(() => {
    fetchDragons();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {dragons.map(dragon => (
        <DragonCard key={dragon.id} dragon={dragon} />
      ))}
    </div>
  );
};

export default DragonsList;
