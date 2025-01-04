let arr1 = [];

// 元组类型
let arr2: [number, string] = [1, '2'];
arr2.push(3);

// 枚举类型;自带类型的对象,数字类型的枚举，可以反举
enum Gender {
  Male,
  Female,
}
const enum UserRole {
  Admin = 1,
  User = 2,
  MANAGE = 'ABC',
  TEST10 = 'TEST1', //异构枚举
}
console.log(UserRole.Admin);

// null和undefined
// 任何类型的子类型，严格模式下，只能赋给本身
let u: undefined = undefined;
let n: null = null;
// void 函数的返回值为空，只在函数中使用
const fn = (): void => {
  return undefined;
};
// never 函数的返回值为never，never类型不能赋值给其他类型
// 任何类型的子类型
const fn1 = (): never => {
  throw new Error();
};

// 类型保护：保障程序的不缺失,完整性保护
// 针对不同类型做不同的处理
const validate = (val: never) => {};
const getResult = (val: number | string | boolean) => {
  if (typeof val === 'number') {
    //类型收窄
    return val + 1;
  } else if (typeof val === 'string') {
    return val + '1';
  }
  // validate(val);
};

// object对象类型
// object,{},Object
// let obj: {} = '123'; //最大范围
// let obj2: Object = '1';基本不使用
const obj3: object = {
  name: '123',
};
const create = (target: object) => {};

// Symbol,BigInt
let s = Symbol('123');
let s2: bigint = 123n;

// any类型 anyScript 有时候我们要对类型做转化，无法直接转化，你可以赋予任何类型检测
// 根据你赋予的值进行类型推导
let num2;
