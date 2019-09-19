'use strict'

var Title = require('./app');
var ReactDOM = require('react-dom')
var React = require('react')

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)