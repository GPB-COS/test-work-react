import Router from './components/Router';
import React  from 'react';
import './styles/App.scss';


export default class App extends React.Component 
{
  render() {
    return (
      <div className="container">
        <Router />
      </div>
    )
  }
}
