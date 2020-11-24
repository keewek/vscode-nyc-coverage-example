import * as assert from 'assert';
import * as modA from '../../module-a';

suite('Module A Test Suite', function() {
    test('getValue(true) returns correct value', function() {
        assert.strictEqual(modA.getValue(true), 'module-a: true');
    });
});
