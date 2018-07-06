function foo() {
    console.log(this.a);
}

var a = "Oops, global";

let obj2 = {
    a: 2,
    foo: foo
};

let obj1 = {
    a: 22,
    obj2: obj2
};

obj2.foo(); // 2 this指向调用函数的对象
obj1.obj2.foo(); // 2 this指向最后一层调用函数的对象

// 隐式绑定丢失
let bar = obj2.foo; // bar只是一个函数别名 是obj2.foo的一个引用
bar(); // "Oops, global" - 指向全局