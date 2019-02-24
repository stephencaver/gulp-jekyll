// Example

var $ = require('jquery');

// If you want jquery don’t forget to add the following to the package.json:
// "browserify-shim": {
//   "jquery": "$"
// },

$(function() {
 console.log('jQuery loaded');
});


// And add jQuery to your dependencies in bower.json:
//"jquery": "~2.1.1"
