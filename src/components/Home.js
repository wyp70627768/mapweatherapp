import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const $ = window.$;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { city: null }
    this.autocomplete = this.autocomplete.bind(this)
  }

  render() {
    return (
      <form className="search-form">
        <div className="form-group">
          <input type = "text"
                 className="form-control" id="city_input"
                 placeholder="Enter City"
                 autoComplete="off"
                 onChange={(e) => {
                     this.setState({city: e.target.value})
                     this.autocomplete(e.target)
                 }}
                 onKeyDown={(e) => {
                     if (e.KeyCode === 13 && $('.city-autocomplete').hasClass('active')) {
                         this.setState({ city: $('.city-autocomplete').text() })
                         e.target.value = $('.city-autocomplete').text();
                         $('.city-autocomplete').removeClass('active')
                         $('.city-autocomplete').addClass('hidden')
                     }
                     if (e.keyCode === 38) {
                        $('.city-autocomplete').removeClass('active')
                    }
                    if (e.keyCode === 40) { $('.city-autocomplete').addClass('active') } else {
                        $('.city-autocomplete').removeClass('active')
                    }
                 }}
          />
          <input type = 'submit'
            className="btn btn-primary"
            onClick={(e) => {
                e.preventDefault()
                this.props.onClick(this.state.city)
            }}
            value='search' />
        </div>
      </form>
    );
  }
}

export default Home;