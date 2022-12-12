import React, {
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
import MainPage from './components/MainPage';
import { fetchItem } from './redux/actions/itemsAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem());
  }, []);
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<Loading />} path="/:id/details" />
    </Routes>
  );
}

export default App;
