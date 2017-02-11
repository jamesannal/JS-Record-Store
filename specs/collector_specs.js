var assert = require('assert');
var Collector = require('../collector');
var Store = require('../record_store');
var Record = require('../record');

describe("Collector", function(){

  var collector;
  var record_store;
  var record1;
  var record2;
  var record3;
  var record4;

  beforeEach(function(){
    collector = new Collector("Dave", 20);
    record_store = new Store("Fred's Records", "Edinburgh", 0);
    record1 = new Record("Death In Vegas", "The Contino Sessions", 6);
    record2 = new Record("A Perfect Circle", "The Thirteenth Step", 12);
    record3 = new Record("Stabbing Westward", "Ungod", 5);
    record4 = new Record("Morcheeba", "The Big Calm", 8);
    record5 = new Record("The Barenaked Ladies", "Maroon", 4);
    record_store.addRecord(record1);
    record_store.addRecord(record2);
    record_store.addRecord(record3);
    record_store.addRecord(record4);
    });

  it("should be able to steal record", function(){
    collector.addRecordToCustomer(record_store, record1);
      assert.equal(1, collector.getCollection());
  });

  it("should be able to buy record properly", function(){
    collector.buy(record_store, record1);
    assert.equal(14, collector.cash);
    assert.equal(3, record_store.getInventoryCount());
    assert.equal(1, collector.getCollection());
  });

  it("should reject sale if collector doesn't have enough money", function(){
    collector.buy(record_store, record1);
    collector.buy(record_store, record2);
    assert.equal("Get lost cheapskate!", collector.buy(record_store, record2));
  });

  it("should be possible for collector to sell to store", function(){
    collector.addRecordToCustomer(record_store, record5);
    collector.sell(record_store, record5);
    assert.equal(24, collector.cash);

  })



});