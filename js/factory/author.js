function Person(name){
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}


// IT工程师;
// extend Person
//call 的用法
function Coder(name,languages){
    Person.call(this,name);
    //父类没有的可以加
    this.languages = languages;
}

//new Person 新的对象就是Coder的原型对象;

Coder.prototype = new Person();
Coder.prototype.construtor = Coder;
Coder.prototype.getLanguages = function(){
    return  (this.languages);    
}

var test = new Person('test');
    console.log(test.name);

var test2 = new Coder('test2',['JS','Python','C/C++']);

console.log(test2.name + ' ' + test2.languages.join(','));   
console.log(test2.getName());  
console.log(test2.getLanguages());
     


