import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

import { getLocations } from './services';


class App extends Component {
  componentDidMount () {
    window.navigator.geolocation
    ? this.getLocationData()
    : this.locationNotAvailable()
  }

  locationNotAvailable = () => {
    alert('Location services not available.');
  }

  getLocationData = (data) => {
    !data
    ? window.navigator.geolocation.getCurrentPosition(this.getLocationData)
    : this.fetchFood(data);
  }

  fetchFood = (data) => {
    console.log('fetching with:', data);
    const lat = data.coords.latitude;
    const long = data.coords.longitude;
    getLocations(lat, long);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
