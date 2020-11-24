import * as assert from 'assert';
import * as modC from '../../module-c';

suite('Module C Test Suite', function() {
    test('getValue(true) returns correct value', function() {
        assert.strictEqual(modC.getValue(true), 'module-a: true - module-b: true');
    });

    test('getValue(false) returns correct value', function() {
        assert.strictEqual(modC.getValue(false), 'module-a: false - module-b: false');
    });
});
