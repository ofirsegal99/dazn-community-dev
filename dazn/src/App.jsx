import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";

import InteractingTechnology from "interacting_technology/InteractingTechnology";

import "./styles/root.css";
import NavBar from "./layouts/NavBar";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Schedule from "./pages/schedule";
import Sports from "./pages/sports";
import useStore from "dazn/store";
const App = () =>{
  const { currentUser } = useStore() 
  console.log({currentUser})
  return (
    <div className="container">
      <BrowserRouter>
      <>
      <NavBar/>
            <Route path="/" exact render={(props) => (<Home Profile={currentUser} {...props}/>)} />
            <Route path="/home" exact render={(props) => (<Home Profile={currentUser} {...props}/>)}/>
            <Route path="/menu" exact render={(props) => (<Menu Profile={currentUser} {...props}/>)}/>
            <Route path="/schedule" exact render={(props) => (<Schedule Profile={currentUser} {...props}/>)}/>
            <Route path="/sports" exact render={(props) => (<Sports Profile={currentUser} {...props}/>)}/>
            <Route path="/community" exact component={InteractingTechnology}/>
            {/* <Route path="/community" exact render={(props) => (<InteractingTechnology Profile={Profile} {...props}/>)}/> */}
      </>
      </BrowserRouter>
    </div>
  );
} 
ReactDOM.render(<App />, document.getElementById("app"));
