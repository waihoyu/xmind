//第一种方式；
//字面量声明对象

var test = {
    name: '第一种方式: 字面量声明对象',
    age: 1,
    theWay: function () {
        console.log(this.name + ' ' + this.age);
    }
}

//第二种方式: Object方式
test.theWay();

var test2 = new Object();
test2.name = '第二种方式: Object方式';
test2.age = 2,
test2.theWay = function () {
    console.log(this.name + ' ' + this.age);
}

test2.theWay();

//第三种方式: 使用new关键字
var test3 = function test3() {
    this.name = '第三种方式: 使用new关键字';
    this.age = 3,
    this.theWay = function () {
        console.log(this.name + ' ' + this.age);
    }
}

new test3().theWay();

//第四种方式: 升级改进
var test4 = function test4(name,age) {
    this.name = name;
    this.age = age,
    this.theWay = function () {
        console.log(this.name + ' ' + this.age);
    }  
}

new test4('第四种方式: 升级改进',4).theWay();


//第五种方式: 升级改进
var test5 = function test5(option) {
    this.name = option.name;
    this.age = option.age,
    this.theWay = function () {
        console.log(this.name + ' ' + this.age);
    }  
}

new test5({name:'第五种方式: 升级改进',age:5}).theWay();


//第六种方式: 升级改进
var test6 = function test6(option) {
    this.name = option.name;
    this.age = option.age;
}
test6.prototype.theWay = function () {
    console.log(this.name + ' ' + this.age);
}  

new test6({name:'第六种方式: 升级改进',age:6}).theWay();


//第七种方式: 升级改进
var test7 = function test7(option) {
    this._init(option);
}

test7.prototype._init = function(option){
    this.name = option.name;
    this.age = option.age;
}
test7.prototype.theWay = function () {
    console.log(this.name  + ' ' +  this.age);
}  

new test7({name:'第七种方式: 升级改进',age:7}).theWay();



