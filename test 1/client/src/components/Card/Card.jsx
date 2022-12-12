import React from 'react';
import './Card.scss';

export default function Card({ item }) {
  return (
    <div className="content" style={{ flex: '0 0 33%' }}>
      <div>
        <h1>{item?.header}</h1>
      </div>
      <div>
        <ul>
          {item?.options?.map((el) => (<li>{el}</li>))}
        </ul>
      </div>
      <div>
        <p className="text" style={{ flexWrap: 'wrap' }}>
          {item.text}
        </p>
      </div>
    </div>
  );
}
