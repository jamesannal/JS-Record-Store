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
  },

  showInventory: function(){
    var instance = "";
    for (var item of this.inventory) {
      var reply = "Artist: " + item.name + ", Title: " + item.title + ", Price: " + item.price + '. ' 
      instance += reply;
    }
    return instance;
  }
};

  module.exports = Store;