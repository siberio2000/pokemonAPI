if (typeof window !== 'object') {
    global.window = global;
    global.window.navigator = {};
  }

  const getPokemon = require('../main.js');


  QUnit.module('qunit basic test');

  QUnit.test('qunit basic test', assert => {
    assert.true( true, "boolean true" );
  });