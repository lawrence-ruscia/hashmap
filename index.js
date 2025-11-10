import { HashMap } from './solution-hashmap/hashmap.js';
import { HashSet } from './solution-hashset/hashset.js';

// const map = new HashMap();

// map.set('apple', 'red');
// map.set('banana', 'yellow');
// map.set('carrot', 'orange');
// map.set('dog', 'brown');
// map.set('elephant', 'gray');
// map.set('frog', 'green');
// map.set('grape', 'purple');
// map.set('hat', 'black');
// map.set('ice cream', 'white');
// map.set('jacket', 'blue');
// map.set('kite', 'pink');
// map.set('lion', 'golden');
// map.set('moon', 'silver');

// const length = map.length;
// console.log({ length });

const set = new HashSet();

set.add('apple');
set.add('banana');
set.add('carrot');
set.add('dog');
set.add('elephant');
set.add('frog');
set.add('grape');
set.add('hat');
set.add('ice cream');
set.add('jacket');
set.add('kite');
set.add('lion');
set.add('moon');

console.log('Before removal: ', set.values());
const removeMoon = set.remove('moon');
console.log('After removal: ', set.values());
