/* eslint-disable arrow-parens */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { useLocalObservable, Observer } from 'mobx-react-lite';

function CounterFunction() {
  const store = useLocalObservable(() => ({
    count: 0,
    dec() {
      // eslint-disable-next-line no-plusplus, react/no-this-in-sfc
      this.count--;
    },
    inc() {
      // eslint-disable-next-line no-plusplus, react/no-this-in-sfc
      this.count++;
    },
  }));

  return (
    <div>
      <button type="submit" onClick={store.dec}>-</button>
      <Observer>
        {() => (

          <span>{store.count}</span>
        )}
      </Observer>
      <button type="submit" onClick={store.inc}>+</button>
    </div>
  );
}

export default (CounterFunction);

// import React, { useState } from 'react';

// export default function CounterFunction(props) {
//   const [count, setCount] = useState(props.initialCounter ?? 0);
//   const dec = () => setCount(prevCount => prevCount - 1);
//   const inc = () => setCount(prevCount => prevCount + 1);

//   return (
//     <div>
//       <button type="submit" onClick={dec}>-</button>
//       <span>{count}</span>
//       <button type="submit" onClick={inc}>+</button>
//     </div>
//   );
// }
