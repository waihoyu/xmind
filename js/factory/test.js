//JS 前端代码练习

var fruit = function fruit() {
  name: 'fruit'
}

fruit.prototype.sellFruit = function (model) {
  var fruitTest = null;
  switch (model) {
    case 'apple':
      fruitTest = new apple();
      break;
    case 'banana':
      fruitTest = new banana();
      break;
    default:
      break;
  }
  fruitTest.theSize();
  return fruitTest;
}

var apple = function () {
  fruit.call(this);
}

apple.prototype.theSize= function () {
  console.log('the size of apple');
}

apple.prototype = new fruit();

apple.prototype.construction = fruit;

var banana = function () {
  fruit.call(this);
}

banana.prototype.theSize = function () {
  console.log('the size of  banana');
} 
var test = new fruit();
test.sellFruit('banana');

