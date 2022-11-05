import React, { useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import CartDetali from './components/CartDetalis/CartDetali';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Main from './components/Main';
import NoMatches from './components/NoMatches';

function App() {
  const [text, setText] = useState([] || null);

  useEffect(() => {
    fetch('http://localhost:3002/api/services')
      .then((res) => res.json())
      .then((data) => setText(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(text);

  return (
    <>
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main text={text} />} />
        <Route path="/:id" element={<CartDetali text={text} />} />
        <Route path="*" element={<NoMatches />} />
      </Routes>
    </>
  );
}

export default App;
