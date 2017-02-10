var Record = function(name, title, price){
  this.name = name,
  this.title = title,
  this.price = price
}

Record.prototype = {
  getName: function(){
    return this.name;
  },

  getTitle: function(){
    return this.title;
  },

  getPrice: function(){
    return this.price;
  }
}

module.exports = Record;