import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';

export default function MainPage() {
  const items = useSelector((store) => store.ItemSaga);

  console.log(items);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {items && items?.map((el) => <Card key={el.id} item={el} />)}
    </div>
  );
}
