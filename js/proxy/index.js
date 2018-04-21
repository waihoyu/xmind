// 小明表白的故事
// 小明  设计模式
// js 基础类型 字符串  数字 对象  array, function 
// bool  布尔值  null  为空  undefined
// 五大基础类型 1 个复杂类型
//Symbol 

var  xiaoming = {
    name: '小明',
    age: 21,
    hasGirlFriend: false,
    job: null,
    city: undefined,
    sendFlow: function (target) {
        var flower = new Flow('满天星');
        // console.log(target.receiveFlower);        
        if(typeof target.receiveFlower == 'function')
            target.receiveFlower(flower,this.name);
        else
            console.log('接受不到！');
            
    }
}

var xiaomei = {
    name:'小美',
    age: 21,
    hasBoyFriend: false,
    job: null,
    city: undefined,
    receiveFlower: function(flower,name){
        console.log('收到'+ name +'送的'+ flower.type);    
    },
    /**
     * 功能：提供心情监听
     * 参数：fn 类型函数
     * 在一段时间后，心情好了，将fn执行
     */
    //监听好心情  fn 是个特殊的形参
    ListenGoodMood:function(fn){
        setTimeout(function(){
        fn();
        },10000);
        // typeof fn === 'function'
        //  fn();
    }
}

var xiaomei2 = {
    name:'小美',
    age: 21,
    hasBoyFriend: false,
    job: null,
    city: undefined,
    receiveFlower2: function(){
        console.log('收到' + flower.type);    
    }
}


var Flow = function(type){
    this.type = type || '玫瑰';
}

var xiaoxue = {
    name: '小雪',
    //实现了同样的收花方法，接口 interface
    // 小雪，小梅都实现了同样的方法，实现了相同的接口
    // 小学
    receiveFlower: function(flower,name){
        xiaomei.ListenGoodMood(function(){
            console.log('111');           
            xiaomei.receiveFlower(flower,name);   
        });
        // if(name == '小明'){
        //     console.log('---');           
        // }            
    }
}

// console.log(typeof NaN );
// console.log(NaN + 1);
// console.log(NaN.toString);


xiaoming.sendFlow(xiaomei);
xiaoming.sendFlow(xiaoxue);


// var obejcInit ={

// }

// var objectInit1 = function name(params) {
//     console.log(params);
// }

// var test = new objectInit1(11);
