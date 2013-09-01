// To create BinData values corresponding to the various driver encodings use:
//      var s = "{00112233-4455-6677-8899-aabbccddeeff}";
//      var uuid = UUID(s); // new Standard encoding
//      var juuid = JUUID(s); // JavaLegacy encoding
//      var csuuid = CSUUID(s); // CSharpLegacy encoding
//      var pyuuid = PYUUID(s); // PythonLegacy encoding
// To convert the various BinData values back to human readable UUIDs use:
//      uuid.toUUID()     => 'UUID("00112233-4455-6677-8899-aabbccddeeff")'
//      juuid.ToJUUID()   => 'JUUID("00112233-4455-6677-8899-aabbccddeeff")'
//      csuuid.ToCSUUID() => 'CSUUID("00112233-4455-6677-8899-aabbccddeeff")'
//      pyuuid.ToPYUUID() => 'PYUUID("00112233-4455-6677-8899-aabbccddeeff")'
// With any of the UUID variants you can use toHexUUID to echo the raw BinData with subtype and hex string:
//      uuid.toHexUUID()   => 'HexData(4, "00112233-4455-6677-8899-aabbccddeeff")'
//      juuid.toHexUUID()  => 'HexData(3, "77665544-3322-1100-ffee-ddccbbaa9988")'
//      csuuid.toHexUUID() => 'HexData(3, "33221100-5544-7766-8899-aabbccddeeff")'
//      pyuuid.toHexUUID() => 'HexData(3, "00112233-4455-6677-8899-aabbccddeeff")'

print = function() {}, NumberLong = function() {}, NumberInt = function() {}, ObjectId = function() {}, BinData = function() {}
require('./types')
uuidhelpers = require('../lib/mongo-uuid')

describe('mongo-uuid', function() {
  it('uuid', function() {
  	var s = "{00112233-4455-6677-8899-aabbccddeeff}",
  		uuid = uuidhelpers.UUID(s);

	expect(uuid.toUUID()).to.equal('UUID("00112233-4455-6677-8899-aabbccddeeff")');
  });
});	
