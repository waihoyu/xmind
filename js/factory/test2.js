//
var test = function(){
    console.log('test');
}

test.prototype.print = function print() {
    console.log('it is test prototype print');
}

new test().print();

var test2 = {

    print: function print(){
        console.log('this is test print');       
    }
}

test2.print()