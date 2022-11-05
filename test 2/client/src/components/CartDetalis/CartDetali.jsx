import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detalist from './Detalist';

export default function CartDetali({ text }) {
  const { id } = useParams();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const test = text.filter((el) => el.id === id);
    setCart(test);
  }, []);
  console.log('CartDetali--->>', cart);

  return (
    <div>
      {cart?.map((item) => (
        <Detalist
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
