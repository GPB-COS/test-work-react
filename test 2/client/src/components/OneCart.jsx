import { Observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function OneCart({ item }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const handler = (e) => {
    e.preventDefault();
    navigate(`/${item.id}`);
    console.log('item.id', item.id);
  };
  return (
    <div
      onClick={handler}
      style={{
        width: '150px',
        height: '100px',
        border: '1px solid rgb(255, 255, 255)',
        margin: '15px',
        cursor: 'pointer',
      }}
    >
      <div>
        name:
        {' '}
        {item.name}
      </div>
      <div>
        price:
        {' '}
        {item.price}
      </div>
    </div>
  );
}
