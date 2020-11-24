import * as assert from 'assert';
import * as modB from '../../module-b';

suite('Module B Test Suite', function() {
    test('getValue(true) returns correct value', function() {
        assert.strictEqual(modB.getValue(true), 'module-b: true');
    });
});
