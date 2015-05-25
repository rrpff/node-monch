import extend from 'util-extend';
import { resolve } from 'url';
import request from 'request'

export default class API {
  constructor(root, query = {}){
    this.root = typeof root === 'string'
      ? function(){ return root; }
      : root;

    this.query = function(options){
      return extend({}, this._query, options);
    }
  }

  init(path, query = {}){
    return {
      url: resolve(this.root(), path)
    , qs: this.query(query)
    }
  }

  get(path, query = {}, cb){
    let obj = this.init(...arguments);
    console.log(obj);
    request(obj, cb);
  }
}

class TMDB extends API {
  constructor(){
    super(...arguments);
    console.log(this.root());
  }
}

let api = new TMDB('http://tmdb.org/');
api.get('/movies', function(){
  console.log(arguments);
});
