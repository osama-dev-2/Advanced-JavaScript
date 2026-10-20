// // // const team ={
// // //      namea:["osama","Aaa","sa","ass"],
// // //     // [Symbol.iterator](){
// // //     //     return this.namea[Symbol.iterator]();
// // //     // }
// // // }
// // // for (const item of team) {

// // // console.log(item);
// // // }

// // const arr = [];

// // // const iterator = arr[Symbol.iterator]();

// // console.log(arr);
// // // console.log(iterator.next());
// // // console.log(iterator.next());
// // // console.log(iterator.next());

// // console.log(typeof osama);

// // var osama = function() {
// //    return "Hello";
// // };

// // function osama() {
// //    return "Hello";
// // };

// // const os=osama;

// // console.log(typeof os);

// // function add() {     return 10; }

// // const a=add()

// // const b=add()

// // console.log(typeof a);

// // console.log(typeof b);

// // function add() {
// //     let  b = 10;
// //   return function  () {
// //     return b;
// //   };
// // }

// // const a = add();

// // console.dir( a);
// // "use strict";
// // function showname() {
// //   console.log(this?.name);
// // }

// // const first ={name:"first",showname}
// // const second ={name:"second",showname}

// // first.showname();
// // second.showname();
// // showname();
// // function add(a, b) {
// //     console.log(this.name);
// //     console.log(a + b);
// //     console.log(arguments);
// //     console.log(this);
// // }

// // const user = {
// //     name: "Osama"
// // };

// // const newAdd = add.bind(user, 10);

// // newAdd(20, 20,44);

// // function test() {
// //     console.log(this.name);
// // }

// // const user = {
// //     name: "Osama",
// // };

// // test.call();
// // names = "global";

// // const user = {
// //   names: "user",
// //   test () {
// //     console.log(this.names);
// //   }
// // };

// // user.test();
// // const test1 = user.test.bind(user);
// // test1();
// // "use strict";
// // const user = {
// //     name: "Osama",

// //     test() {
// //         const numbers = [10, 20, 30];

// //         numbers.forEach(function () {
// //             console.log(this.name);
// //         }, this);
// //     }
// // };

// // user.test();

// // const buttonHandler = {
// //   label: "save",
// //   handleClick() {
// //     console.log(this.label);
// //   }
// // };

// // function simulateClick(callback) {
// //   callback();
// // }
// // simulateClick(buttonHandler.handleClick.bind(buttonHandler));

// // function createfun() {
// //     const secret = "hidden";
// //     return new Function("return typeof secret");
// // }

// // const fun = createfun();

// // console.log(fun());

// // "use strict"
// // function introduce() {
// //   return this ;
// // }
// // const user = { name: "osama" };
// // console.log(introduce.call());

// // "use strict"
// // const user = {
// //   names: "user",
// //   test () {
// //     console.log(this.age);
// //   }
// // };

// // function tests(callback) {
// //     user["age"] = 12;
// //  setTimeout(callback,0) ;
// // }
// // tests(()=>user.test());
// // const test1 = user.test;
// // test1();











// // const users = [

// //   {  name: "osama" , age:20},

// //   {  name: "ahmed" , age:30}
// // ]
// // const res=users.map((user)=>{
// //   age=user.age + 1;
// //   return user;
// // })
// // console.log("users:", users);
// // console.log("res:", res);


// // const num=[1,5,10,3,2]

// // const res = num
// // const x=res.toSorted((a,b)=>a-b)

// // console.log(res);
// // console.log(num);
// // console.log(x);



// // const num=["Osama","Ahmed","ali","Mohamed"]
// // const x="ahmed"
// // const z="ahmed"
// // console.log(x.localeCompare(z));



// // console.log(num.sort((a,b)=>a.localeCompare(b)));
 
// let x=d=>-1||1;

// console.log(x());

// // const num=[1,5,10]
// // num.length=4
// // console.log(num);











