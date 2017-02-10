var assert = require('assert');
var Record = require('../record');

describe('Record', function() {
  it('should get record name', function(){
    var record = new Record("Tool", "Lateralus", 10);
    assert.equal('Tool', record.getName());
  });
});