import './App.css';
// import './Data.js';
import React from 'react';
// import Home from "./pages/home/index"
import { Provider } from "react-redux";
import store from "./redux/stores";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import HomePage from "./pages/home";
import CreatePlaylistPage from "./pages/create-playlist";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Home /> */}
        <Router>
          <Switch>
            <PrivateRoute path="/create-playlist">
              <CreatePlaylistPage/> 
            </PrivateRoute>
            <Route path="/" component={HomePage}/>
          </Switch>
        </Router>
        {/* <Search/> */}
      </div>
    </Provider>
  );
}

export default App;
