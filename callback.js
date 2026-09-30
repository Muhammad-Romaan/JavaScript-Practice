//let promise = new Promise((resolve, reject) => {
//  console.log("I am a Promise is Called");
//resolve("JavaScript Functions");
//  reject("I hate JavaScript Functions");
//});

//const getPromise = () => {
//  return new Promise((resolve, reject) => {
//    console.log("I am a promise ");
//resolve("Success");
//      reject("Error");
//});
//};

//let promise = getPromise();
//promise.then((res) => {
//  console.log("Promise Fullfilled", res);
//});

//promise.catch((err) => {
//    console.log("Rejected", err);
//});

//function asyncFunc() {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      console.log("Some Data is Fetched");
//    resolve("Data is Fetched");
//}, 4000);
//});
//}

//function asyncFunc2() {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            console.log("Some Data2 is Fetched");
//            resolve("Data 2 is Fetched");
//       }, 6000);
//    });
//}


//console.log("Fetching Data1");

//let p1 = asyncFunc();
//p1.then((res) => {
//    console.log("Promise Fullfilled", res);
//    console.log("Fetching Data2");
//    let p2 = asyncFunc2();
//    p2.then((res) => {
//        console.log("Promise Fullfilled", res);
//    });
//});


//console.log("One");
//console.log("Two");

//setTimeout(() => {
//    console.log("Hello World!");
//}, 5000);

//console.log("Three");
//console.log("Four");

//function sum(a, b) {
//    console.log(a + b);
//}

//function calculator(a, b, sumCallback) {
//    console.log("calculator function is called");
//  sumCallback(a, b);
//}

//calculator(5, 10, sum);

//async function hello() {
//  console.log("Hello World");
//}

//function api() {
  //return new Promise((resolve, reject) => {
  //  setTimeout(() => {
    //  console.log("Weather Data");
     // resolve(200);
//    }, 2000);
  //});
//}

//(async function () {
 // await api();
//  await api();
//  console.log("Weather Data is Fetched");
//})();

