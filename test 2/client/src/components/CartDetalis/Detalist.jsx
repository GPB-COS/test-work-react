import React, { useState } from 'react';
import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css';

export default function Detalist({ item }) {
  const [loading, setLoading] = useState(true);
  console.log('Detalist--->>', item);
  console.log('loading--->>', loading);

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
      {/* <button onClick={() => (setLoading(true))} type="submit"> click</button> */}

      {loading ? (
        <HalfMalf text="Loading..." bgColor="#3366CC" width="150px" height="150px" />

      ) : (
        <>
          <div>
            {item.name}
          </div>
          <div>
            {item.price}
          </div>
        </>
      )}

    </>

  );
}
