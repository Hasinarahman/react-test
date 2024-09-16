import React, { createContext, useState, useContext } from 'react';

const DragonsContext = createContext();

export const useDragons = () => useContext(DragonsContext);

export const DragonsProvider = ({ children }) => {
  const [dragons, setDragons] = useState([]);

  // Fetch dragons from an API or have static data
  const fetchDragons = async () => {
    const response = await fetch('https://api.spacexdata.com/v4/dragons');
    const data = await response.json();
    setDragons(data.map(dragon => ({ ...dragon, isReserved: false })));
  };

  // Toggle reservation
  const toggleReservation = (id) => {
    setDragons(prevDragons =>
      prevDragons.map(dragon =>
        dragon.id === id ? { ...dragon, isReserved: !dragon.isReserved } : dragon
      )
    );
  };

  return (
    <DragonsContext.Provider value={{ dragons, fetchDragons, toggleReservation }}>
      {children}
    </DragonsContext.Provider>
  );
};
