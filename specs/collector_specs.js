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
    record2 = new Record("A Perfect Circle", "The Thirteenth Step", 9);
    record3 = new Record("Stabbing Westward", "Ungod", 5);
    record4 = new Record("Morcheeba", "The Big Calm", 8);
    });

  it("should be able to buy record", function(){
    collector.addRecordToCustomer(record_store, record1);
      assert.equal(1, collector.getCollection())
  }); 
});