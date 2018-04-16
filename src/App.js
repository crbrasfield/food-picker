import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

import { getLocations } from './services';


class App extends Component {
  state = {
    coords: null
  };

  getMyLocation = () => {
    window.navigator.geolocation
    ? this.getLocationData()
    : this.locationNotAvailable()
  }
  
  getLocationData = (data) => {
    !data
      ? window.navigator.geolocation.getCurrentPosition(this.getLocationData)
      : this.setState({ coords: data.coords })
  }
  
  locationNotAvailable = () => {
    alert('Location services not available.');
  }

  fetchFood = (e) => {
    e.preventDefault();
    const { latitude, longitude } = this.state.coords;
    getLocations(latitude, longitude, this.showLocations);
  }

  showLocations = (locations) => {
    console.log(locations);
  }

  hasLocation = () =>
    this.state.coords !== null;

  render() {
    return (
      <div className="App">
        {
          this.hasLocation()
          ? this.foodForm()
          : this.getLocationButton()
        }
      </div>
    );
  }

  getLocationButton = () =>
    <button onClick={this.getMyLocation}>
      Get my location
    </button>

  foodForm = () =>
    <form onSubmit={this.fetchFood}>
      Distance: <input name="distance"  />
      <button>Find my food!</button>
    </form>
}

export default App;
