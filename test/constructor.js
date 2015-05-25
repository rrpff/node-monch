var expect = require('chai').expect
  , Monch = require('../build/');

describe('Constructor', function(){

  it('should accept a string or function as its root url', function(){
    var api1 = new Monch('http://api.example.com')
      , api2 = new Monch(function(){ return 'http://' + this.region + '.battle.net/wow' });

    api2.region = 'eu';

    expect(api1.root()).to.equal('http://api.example.com');
    expect(api2.root()).to.equal('http://eu.battle.net/wow');
  });

});
