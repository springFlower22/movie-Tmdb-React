import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import All from "./pages/All";
import Sort from "./pages/Sort";
import Search from "./pages/Search";

const App = () => {

  return (
    <BrowserRouter>
       <Switch>
        <Route path="/" exact component={All}/>
        <Route path="/sort" exact component={Sort}/>
        <Route path="/search" exact component={Search}/>
       </Switch>
    </BrowserRouter>
  )
}

export default App;