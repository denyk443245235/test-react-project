import React from 'react';
import List from "./components/List/List";
import EntryView from "./components/EntryView/EntryView";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/entry-view/:id/:index" component={EntryView} />
      </Switch>
    </div>
  );
}

export default App;
