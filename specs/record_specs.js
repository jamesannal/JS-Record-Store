var assert = require('assert');
var Record = require('../record');

describe('Record', function() {
  it('should get record name', function(){
    var record = new Record("Tool", "Lateralus", 10);
    assert.equal('Tool', record.getName());
  });
  
  it('should get record title', function(){
    var record = new Record("Monster Magnet", "Powertrip", 10);
    assert.equal('Powertrip', record.getTitle());
  });
});