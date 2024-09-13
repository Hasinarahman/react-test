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
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (dragons.length === 0) return <p>No dragons available</p>;

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
    <div className="w-full p-5 flex flex-col mb-14">
      {renderContent()}
    </div>
  );
};

export default Dragons;