import React, { useState } from 'react';
import { BrowserRouter as Router , Switch,Route } from 'react-router-dom';
import MovieContainer from './movie container/MovieContainer';
import Description from './movie container/Description';

import './App.css';

function App() {
 

  return (
  <Router>
    <Switch>
 
 <Route exact path='/' component={MovieContainer} />
 <Route exact path='/description/:id' component={Description}  />  
 </Switch>
  </Router>
    
      
 
       
 

    
    
    
  );
}

export default App;

