import { HashMap } from './solution-hashmap/hashmap.js';

const map = new HashMap();

map.set('apple', 'red');
map.set('banana', 'yellow');
map.set('carrot', 'orange');
map.set('dog', 'brown');
map.set('elephant', 'gray');
map.set('frog', 'green');
map.set('grape', 'purple');
map.set('hat', 'black');
map.set('ice cream', 'white');
map.set('jacket', 'blue');
map.set('kite', 'pink');
map.set('lion', 'golden');
map.set('moon', 'silver');

console.log('Before clear: ', { length: map.length });
map.clear();
console.log('After clear: ', { length: map.length });
