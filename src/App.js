import React from 'react';
import './App.css';

import Admin from './components/admin'
import { Provider } from "react-redux"
import Store from "./components/Redux/store"

function App() {
  return (
    <div className="App">
      <Provider store={Store}>

        <Admin></Admin>
      </Provider>
    </div>
  );
}

export default App;
