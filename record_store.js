var Store = function(name, city, balance){
  this.name = name,
  this.city = city,
  this.inventory = []
  this.balance = balance
}

Store.prototype = {

  getStoreName: function() {
    return this.name;
  },

  getCity: function() {
    return this.city;
  },

  getInventoryCount: function(){
    return this.inventory.length;
  },

  getBalance: function(){
    return this.balance;
  },

  addRecord: function(item){
    this.inventory.push(item);
  }
};

  module.exports = Store;