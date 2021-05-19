import React    from "react";
import Router   from './components/Router';
import Progress from './components/Progress';
import Error    from './components/Error';

import './style/App.scss';


export default class App extends React.Component
{    
  
  render()
  {  
    return (
      <div className='containerMain'>
        <Progress />
        <Error />
        <Router /> 
      </div>      
    )
  }
}