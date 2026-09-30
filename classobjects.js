//const employe = {
//   calcTax() {
//        console.log("The Tax is 10% for your sallary");
//    },
//};

//const Roman = {
//    Sallary: 20000,
//};

//const Asad = {
//    Sallary: 20000,
//};

//const Sufiyan = {
//    Sallary: 30000,
//};

//const Owais = {
//    Sallary: 25000,
//};

//const Rafay = {
//    Sallary: 17000,
//};

//const Muskan = {
//    Sallary: 15000,
//};

//Roman.__proto__ = employe;
//Asad.__proto__ = employe;
//Sufiyan.__proto__ = employe;
//Owais.__proto__ = employe;
//Rafay.__proto__ = employe;
//Muskan.__proto__ = employe;

//class ToyotaCar {
//    constructor() {
//        console.log("This is a Toyota Car");
//        this.brandName = "Toyota";
//    }

//    start() {
//        console.log("Starting The Car");
//    }

//    stop() {
//        console.log("Stopping The Car");
// }

//}

//let Civic = new ToyotaCar();
//Civic.brandName = "Toyota";

//class frontendDeveloper {
//   constructor() {

//       console.log("Enter parent constructor");
//      this.eat = "eaating";

//  }
//  eat() {
//       console.log("eating food");
//   }

//sleep() {
//  console.log("sleeping");
//}
//}

//class backendDeveloper extends frontendDeveloper {
//  constructor(branch) {
//      console.log("Enter Child constructor");

//       super();
//       this.branch = branch;
//       console.log("Exit Child constructor");

//   }
// coading() {
//      console.log("coading");
//  }
//}

//let Roman = new backendDeveloper("Computer Science");

let DATA = "Secret Data";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;

    }

    viewData() {
        console.log("data =", DATA);
    }

}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData() {
        DATA = "Edited Data";
    }
}

let student1 = new User("Roman", "romanshaikh132@gmail.com");
let student2 = new User("Gigoman", "gigoman861@gmail.com");
let admin1 = new Admin("Admin", "admin@gmail.com");