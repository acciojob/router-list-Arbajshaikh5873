import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import "./../styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        {/* Do not remove the main div */}
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/items/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
