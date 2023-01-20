import React from 'react';
import Cards from '../Card/Cards';
import file from '../../file.json';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      {file.map((el) => <Cards card={el} key={el.id} />)}
    </div>
  );
}
