import React from 'react';
import MainPage from './MainPage'
import ReportPage from './ReportPage'
import SingleReport from './SingleReport'
import Notfound from './Notfound'
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
    <div>
    
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/report" component={ReportPage} />
      <Route path="/report/:name" component={SingleReport} />
      <Route component={Notfound} />
      </Switch>
      
    </div>
  </Router>
  );
}

export default App;
