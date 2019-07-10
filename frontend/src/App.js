import React from 'react';
import './App.css';
import PublicRoutes from "./router";
import {createBrowserHistory} from "history";
const history = createBrowserHistory();

const App = () => {
  return (
    <div className="App">
      <PublicRoutes history={history} />
    </div>
  );
}

export default App;
