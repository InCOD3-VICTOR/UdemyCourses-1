'use strict'

var Title = require('./app');
var ReactDOM = require('react-dom')

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)