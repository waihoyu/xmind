let map = new Map();
let a = { name: 1 };
let b = { name: 2 };
let c = b;
map.set(a);
map.set(b);
map.set(c);
console.log(map);
