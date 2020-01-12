let m = new Map();
console.log(m);
let a = m.set(4, 5);
console.log(a);

let c = new Map([
    [1, 2],
    [4, 3],
]);
console.log(c);
for (let i of c) {
    console.log(i);
}
