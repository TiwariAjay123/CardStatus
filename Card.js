// src/components/Card.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardData } from '../features/cardSlice';

const Card = ({ id }) => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.data[id]);
  const status = useSelector((state) => state.card.status);
  const error = useSelector((state) => state.card.error);

  const handleClick = () => {
    dispatch(fetchCardData(id));
  };

  return (
    <div className="card" onClick={handleClick}>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && card && <p>{card.content}</p>}
      {status !== 'loading' && status !== 'succeeded' && <p>Click to load data</p>}
    </div>
  );
};

export default Card;
