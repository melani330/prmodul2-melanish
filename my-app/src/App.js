import './App.css';
// import './Data.js';
import React from 'react';
import Home from "./pages/home/index"
import { Provider } from "react-redux";
import store from "./redux/stores";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
        {/* <Search/> */}
      </div>
    </Provider>
  );
}

export default App;
