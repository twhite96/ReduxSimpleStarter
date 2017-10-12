import React, {Component} from 'react';

/* jshint ignore:start */

/* Using JS class to upgrade to class component */
class SearchBar extends Component {
  /* Every class must have a render method */
  render() {
    /* On or handle to handle browser events */
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
