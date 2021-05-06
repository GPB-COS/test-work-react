import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/Header/Header';
import { ItemList } from './components/ItemList/ItemList';
import { useState } from 'react';
import { Loader } from './components/Loader/Loader';
import { ItemDetails } from './components/ItemDetails/ItemDetails';
import { Home } from './components/Home/Home';

function App() {

  // const [loader, setLoader] = useState(true)
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/itemList">
          <ItemList />
        </Route>
        <Route exact path="/:id/details">
          <ItemDetails />
        </Route>
        {/* <Loader /> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
