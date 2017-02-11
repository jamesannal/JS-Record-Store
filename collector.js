var Collector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
}

Collector.prototype = {
  addRecordToCustomer: function(record) {
    this.collection.push(record);
  },

  getCollection: function(){
    return this.collection.length;
  }
}

module.exports = Collector;