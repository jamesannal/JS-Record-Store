var Record = function(name, title, price){
  this.name = name,
  this.title = title,
  this.price = price
}

Record.prototype = {
  getName: function(){
    return this.name;
  }
}

module.exports = Record;