//let marks = [85, 97, 44, 37, 76, 60];

//let sum = 0;

//for (let val of marks) {
//   sum = sum + val;
//}

//let avg = sum / marks.length

//console.log("Average marks of the class = ", avg);

//let items = [250, 645, 300, 900, 50];

//let i  = 0;

//for (let val of items){
//    console.log(`value at index ${i} = ${val}`);
//    let offer = val / 10;
//    items [i] = items[i] - offer;
//   console.log( `value after offer = ${items[i]}`);
//    i++;
//}

let company = ["Bloomberg", "Microsoft", "Google", "Nvedia", "Apple", "Netflix"];

company.shift();

company.splice(2, 1, "Tapmad");

company.push("Amaozn");

console.log(company);