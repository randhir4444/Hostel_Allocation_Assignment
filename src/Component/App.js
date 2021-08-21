import React from "react";
import BookedData from './BookedDate';
import Choose_Hostel from "./Choose_Hostel";
import LogIn from './LogIn';
import Header from './Header';
import {Redirect, Route, Switch } from 'react-router-dom';
import Gender from './Gender';

function App() {
  return (
    <div className="App">
    <Header/>
    <LogIn/>
    <Switch>
            <Route path="/" exact component={LogIn}/>
            <Route path="/Gender" exact component={Gender}/>
            <Route path="/Choose_Hostel" exact component={Choose_Hostel}/>
            <Route path="/BookedData" exact component={BookedData}/>
            <Redirect to="/"/>
    </Switch>
    </div>
  );
}

export default App;
