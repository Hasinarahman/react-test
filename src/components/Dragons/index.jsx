import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dragon from './Dragonsltem';
import { fetchDragons } from '../../redux/dragons/DragonsSlisc';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons, isLoading, error } = useSelector((store) => store.dragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const renderContent = () => {
    if (isLoading)
      return (
        <p className="text-center text-blue-600 font-semibold">
          Loading...
        </p>
      );
    if (error)
      return (
        <p className="text-center text-red-600 font-semibold">
          Error: {error}
        </p>
      );
    if (dragons.length === 0)
      return (
        <p className="text-center text-gray-500">
          No dragons available
        </p>
      );

    return dragons.map((item, index) => (
      <Dragon
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        description={item.description}
        reserved={item.reserved}
        count={index}
      />
    ));
  };

  return (
    <div className="w-full p-5 flex flex-col mb-14 bg-gray-100 shadow-lg rounded-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
        SpaceX Dragons
      </h2>
      {renderContent()}
    </div>
  );
};

export default Dragons;