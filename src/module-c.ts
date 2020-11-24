import * as modA from './module-a';
import * as modB from './module-b';

export function getValue(isTrue: boolean): string {
    return `${modA.getValue(isTrue)} - ${modB.getValue(isTrue)}`;
}
