// 包装对象类型
const str = new String("Hello, World!");
console.log(typeof str); // object
console.log(str[0]); // H

// * Object 囊括了所有对象
let obj: String | {};
obj = { name: "John", age: 30 };
obj = [1, 2, 3];
obj = 1;
obj = "Hello";
obj = () => console.log("Hello");
// obj = undefined;
// obj = null;
// object是内置类型，自定义属性会报错
let obj2: object = {
  name: "John",
  age: 30,
};

//可以赋值undefined和null
let obj3 = 3;
// obj3 = undefined;

// 值类型
const str2 = "Hello, World!";
const x: 5 = 5;
const y: number = 4 + 1;
console.log(x === y); // true
