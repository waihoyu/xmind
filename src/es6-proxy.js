let inst = new Proxy(
    {},
    {
        get: function(target, proyKey, receiver) {
            console.log(receiver);
            return target.proyKey;
        },
        set: function(target, proyKey, value) {
            target.proyKey = value;
        },
    }
);

// inst.name = 122;
console.log(inst.name);
