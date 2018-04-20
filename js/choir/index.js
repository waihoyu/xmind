console.log('代码团');


var choir = [];

//duck 是鸭对象;
//JSON Object

//只要两只脚站立会嘎嘎嘎叫的都是鸭子;

var duck = {
    name: '鸭王',
    actor:'任达华',
    duckSinging: function(){
        console.log('嘎嘎嘎');   
    }
}

//new 一下 ,json  对象 ，不需要new
//json 慢慢描述  也是数据交换的标准

var yyj = {
    name: 'wxy',
    hasGirlFriend: false,
    birth:'5-23',
    girlAttributes:{
        age: 11,
        tall: 160,
        hair:'black',
    }
}

var chicken = {

}

for (let index = 0; index < 100; index++) {

    choir.push(duck);
    // const element = array[index];
}

choir.push(chicken);

choir.push(yyj);

console.log(choir[100]);

console.log(choir[101]);
