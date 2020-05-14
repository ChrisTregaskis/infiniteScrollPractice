import React from 'react';
import Images from "./Components/Images";
import './App.css';

function App() {
  return (
      <div id="root">
          <div className="hero is-fullheight is-bold is-info">
              <div className="hero-body">
                  <div className="container">
                      <div className="header content">
                          <h1 className="title is-1">
                              Infinite Scroll Unsplash Practice
                          </h1>
                      </div>
                      <Images />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
