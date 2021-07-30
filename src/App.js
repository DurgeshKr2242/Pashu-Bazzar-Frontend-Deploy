import React from "react";
import "./App.css";
import Header from "./components/Header";
import Chats from "./components/Chats";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Messages from "./components/Messages";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Chats />
        </Route>
        <Route path="/:id" children={<Messages />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
