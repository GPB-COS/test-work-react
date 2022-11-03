import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detalist from './Detalist';

export default function CartDetali() {
  const { id } = useParams();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://locahost:3002/api/services/${id}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  console.log('CartDetali--->>', id);
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
