var assert = require('assert');
var Store = require('../record_store');
var Record = require('../record');

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
  }),

  it('should be able to add record to inventory', function(){
    var record1 = new Record('Rage Against The Machine', 'The Battle For Los Angeles', 9);
    store.addRecord(record1);
    assert.equal(1, store.getInventoryCount());
  }),

  it('should be able to add second record to inventory', function(){
    var record2 = new Record('Air', 'Moon Safari', 8);
    store.addRecord(record2);
    assert.equal(2, store.getInventoryCount());
  })

})