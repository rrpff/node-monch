'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilExtend = require('util-extend');

var _utilExtend2 = _interopRequireDefault(_utilExtend);

var _url = require('url');

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var API = (function () {
  function API(root) {
    var query = arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, API);

    this.root = typeof root === 'string' ? function () {
      return root;
    } : root;

    this.query = function (options) {
      return (0, _utilExtend2['default'])({}, this._query, options);
    };
  }

  _createClass(API, [{
    key: 'init',
    value: function init(path) {
      var query = arguments[1] === undefined ? {} : arguments[1];

      return {
        url: (0, _url.resolve)(this.root(), path),
        qs: this.query(query)
      };
    }
  }, {
    key: 'get',
    value: function get(path, _x3, cb) {
      var query = arguments[1] === undefined ? {} : arguments[1];

      var obj = this.init.apply(this, arguments);
      console.log(obj);
      (0, _request2['default'])(obj, cb);
    }
  }]);

  return API;
})();

exports['default'] = API;

var TMDB = (function (_API) {
  function TMDB() {
    _classCallCheck(this, TMDB);

    _get(Object.getPrototypeOf(TMDB.prototype), 'constructor', this).apply(this, arguments);
    console.log(this.root());
  }

  _inherits(TMDB, _API);

  return TMDB;
})(API);

var api = new TMDB('http://tmdb.org/');
api.get('/movies', function () {
  console.log(arguments);
});
module.exports = exports['default'];