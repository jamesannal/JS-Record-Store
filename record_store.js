var Record = require('./record');

var Store = function(name, city){
  this.name = name,
  this.city = city,
  this.inventory = []
}

Store.prototype = {

  getStoreName: function() {
    return this.name;
  },

  getCity: function() {
    return this.city
  }
};

  module.exports = Store;