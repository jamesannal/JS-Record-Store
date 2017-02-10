var assert = require('assert');
var Store = require('../record_store');

describe('Store', function() {
  var store = new Store('Bobs Record Store', 'Edinburgh', 0)

  it('should have a name', function(){
    assert.equal('Bobs Record Store', store.getStoreName());
  }),

  it('should have a city', function(){
    assert.equal('Edinburgh', store.getCity());
  }),

  it('should start with an empty inventory', function(){
    assert.equal(0, store.getInventoryCount());
  }),

  it('should start with an empty balance', function(){
    assert.equal(0, store.getBalance());
  })

})