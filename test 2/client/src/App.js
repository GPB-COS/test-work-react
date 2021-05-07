import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/Header/Header';
import { ItemList } from './components/ItemList/ItemList';
import { ItemDetails } from './components/ItemDetails/ItemDetails';
import { Home } from './components/Home/Home';

function App() {

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
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
