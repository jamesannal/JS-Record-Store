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
  },

  buy: function(record_store, record) {
    if(this.cash >= record.price){
      this.cash -= record.price;
      record_store.sellRecord(record);
      this.collection.push(record);
    } else {
      return "Get lost cheapskate!"
    };
  }
}

module.exports = Collector;