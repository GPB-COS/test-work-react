import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ item }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{item?.name}</h5>
        <p className="card-text">
          Цена:
          {' '}
          {item?.price}
        </p>
        <Link to={`/${item?.id}/details`} className="btn btn-primary">details</Link>
      </div>
    </div>
  );
}
