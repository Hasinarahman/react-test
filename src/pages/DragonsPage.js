import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DragonsItem from './DragonsItem';
import { fetchDragons } from '../../redux/dragons/DragonsSlisc';

const DragonsPage = () => {
  const dispatch = useDispatch();
  const { dragons, isLoading, error } = useSelector((state) => state.dragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const renderContent = () => {
    if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;
    if (dragons.length === 0) return <p className="text-center text-gray-500">No dragons available</p>;

    return dragons.map((dragon, index) => (
      <DragonsItem
        key={dragon.id}
        id={dragon.id}
        name={dragon.name}
        image={dragon.image}
        description={dragon.description}
        reserved={dragon.reserved}
        count={index}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Dragons</h1>
      <div className="flex flex-col items-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default DragonsPage;