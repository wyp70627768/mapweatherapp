import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import Home from './components/Home';

const $ = window.$;

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {city: null};
      this.getCityFromSearchInput = this.getCityFromSearchInput.bind(this);
  }
  getCityFromSearchInput(city) {
    function edit(val) {
        let str = 
        $.trim(val)
            .toLowerCase()
            .replace(/[0-9]/g, '')
            .replace(/^[a-z\d,]*\-?[a-z\d,]*$ /g, '')
            .replace(/\s+/g, ' ');

        console.log(str);
        return (
            str === null || str === ''
                ? 'not valid' : str
        )
    }
    const editedValue = edit(city);
    
            if (editedValue === 'not valid') return;
            
            this.setState({ city: editedValue })  
  }
  render() {
    const isValidCity = this.state.city !== null;

    return (
        isValidCity ? 
            <Fragment>
                <Home onClick={this.getCityFromSearchInput}/>
                <FetchData city={this.state.city}/>
            </Fragment> 
            :
            <Home onClick={this.getCityFromSearchInput}/>
    )
  }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
