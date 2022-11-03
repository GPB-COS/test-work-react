import React, { useEffect, useState } from 'react';
import OneCart from './OneCart';
// import { observer, useLocalObservable, Observer } from 'mobx-react-lite';

export default function Main({ text }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
    >
      {text?.map((item) => (
        <OneCart
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
