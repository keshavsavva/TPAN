import React from "react";
import { HashRouter } from "react-router-dom";
import Header from './components/Header';
import Main from './pages/Main'


function App() {
    return (
        // <HashRouter basename="/">
        <div className="back">
            <Header />
            <Main />
        </div>
    );
  }
  
  export default App;
  