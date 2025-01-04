// let const 区别
const age: number = 18; //自动推导字面量类型
const obj = { name: 'why', age: 18 };
// 联合类型可以在没有赋值时，调用公共方法
let name: string | number;
name = 'coderzmy';
name.toLowerCase();
name = 123;
name.toFixed(); //赋值后可以推断类型
//  联合类型用来扩展额外类型
// 字面量类型 type可以声明一个类型
type MyString = 'name' | 'age';
type Direction = 'left' | 'right' | 'top' | 'bottom';
let direction: Direction = 'left';
// type中定义的类型，不是js中的对象
type women =
  | {
      wealthy: true;
      name: string;
    }
  | {
      wealthy: false;
      norality: string;
    };
let richWoman: women = {
  wealthy: true,
  name: 'coderzmy',
};
let poorWoman: women = {
  wealthy: false,
  norality: '勤俭持家',
};
// 可以利用联合类型用来做属性之间的互斥(可辨识联合类型)

// 断言(非空断言，这个值一定不为空，绕过ts检测了)
let ele = document.getElementById('id');
ele!.style.color = 'red';
// as断言，可以强制把某个类型断言成已经存在的某个类型
let ele2 = document.getElementById('id') as HTMLInputElement;
let ele3 = document.querySelector('input') as HTMLElement;
ele3.style.color = 'red';
// 断言出问题，后果自负

// 双重断言，可以把值断言成any，再断言成某个类型
let obj2 = { name: 'coderzmy', age: 18 };
obj2 as any as { name: string };

export {};
