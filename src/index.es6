import extend from 'util-extend'

export default class API {
  constructor(root, query = {}){
    this.root = typeof root === 'string'
      ? function(){ return root; }
      : root;

    this.query = function(){

    }
  }
}

var tmdb = new API('http://', {

});

