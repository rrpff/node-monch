'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilExtend = require('util-extend');

var _utilExtend2 = _interopRequireDefault(_utilExtend);

var API = function API(root) {
  var query = arguments[1] === undefined ? {} : arguments[1];

  _classCallCheck(this, API);

  this.root = typeof root === 'string' ? function () {
    return root;
  } : root;

  this.query = function () {};
};

exports['default'] = API;

var tmdb = new API('http://', {});
module.exports = exports['default'];