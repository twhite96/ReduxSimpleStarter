import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = '';
/* Create new component.
This should produce some HTML
Take this component's generated HTML and put it on the page
(in the DOM)
 */

/* jshint ignore:start */

/* This is a class */
/* functional component */
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// <App /> is an instance of the class App
// Must select a DOM node in the HTML to render HTML to the page
ReactDOM.render(<App />, document.querySelector('.container'));
/* jshint ignore:end */
