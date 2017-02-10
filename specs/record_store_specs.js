var assert = require('assert');
var Store = require('../record_store');

describe('Record Store', function() {
  var store = new Store('Bobs Record Store', 'Edinburgh')

  it('should have a name', function(){
    assert.equal('Bobs Record Store', store.getStoreName());
  }),

  it('should have a city', function(){
    assert.equal('Edinburgh', store.getCity())
  }),

  it('should start with an empty inventory')
})