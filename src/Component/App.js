import React from "react";
import firebase from "firebase/app";
import BookedData from './BookedDate';
import Choose_Hostel from "./Choose_Hostel";
import LogIn from './LogIn';
import Header from './Header';
import {Redirect, Route, Switch,BrowserRouter } from 'react-router-dom';
import Gender from './Gender';

function App() {
  return (
    <div className="App">
    <Header/>
    <LogIn/>
    <BrowserRouter>
    <Switch>
            <Route path="/" exact component={LogIn}/>
            <Route path="/Gender" exact component={Gender}/>
            <Route path="/Choose_Hostel" exact component={Choose_Hostel}/>
            <Route path="/BookedData" exact component={BookedData}/>
            <Redirect to="/"/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
