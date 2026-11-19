

// function userMethod(nameuser) {
//  this.name = nameuser;
//   this.rol = "admin";
//   this.courses=["as","asas"];
// }

// const osama = new userMethod("osama");
// const ali = new userMethod("ali");

// osama.rol = "user";
// osama.courses.push("js")
// console.log(osama);
// console.log(osama.courses);

// console.log(ali);
// console.log(ali.rol);
// console.log("asd");



// const userMethod={
//   rol:"user",
//   age:40,
//   courses:[],
//   introduce(){
//     console.log("hi"); 
//   }
// }

// const osama=Object.create(userMethod)
// const ali=Object.create(userMethod)
// osama.rol="sup";
// ali.rol="admin"
// osama.age+=1
// userMethod.age++  
// osama.ag
// osama.courses.push("js")
// delete  ali.rol
// console.log(osama);
// console.log(ali);


// console.log(Object.getPrototypeOf(osama).rol);
// console.log(ali);
// // console.log(userMethod.osama);




function userMethod(nameuser) {
 this.name = nameuser;
  this.rol = "admin";
  this.courses=["as","asas"];
  
}

userMethod.prototype.introduce=function(){
    console.log(`hi ${this.name} `); 
}

const osama = new userMethod("osama");
const ali = new userMethod("ali");
osama.courses.push("js")  
osama.introduce()




console.log(osama);
console.log(ali);
