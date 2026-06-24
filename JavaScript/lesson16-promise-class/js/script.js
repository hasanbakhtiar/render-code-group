// const myPromise = new Promise((resolve,reject)=>{
//   const comingData = false;
//   if (comingData) {
//     resolve("success");
//   }else{
//     reject("reject");

//   }
// });

// myPromise.then(res=>console.log(res)).catch(err=>console.log(err))

// fetch("https://fakestoreapi.com/products").then

// const data = [
//   {
//     title:"Asus Zenbook",
//     price:1234
//   },{
//     title:"Acer Swift",
//     price:4321
//   }
// ];

// const convertData = JSON.stringify(data);
// const covterCovterData = JSON.parse(convertData);

// document.querySelector('p').innerHTML = convertData;
// console.log(covterCovterData[0].title);

// async function fetchApi (){

// }

// const fetchApi = async()=>{
//   const comingData = await fetch("https://fakestoreapi.com/products");
//   const products = await comingData.json();
//   console.log(products);
// }

// fetchApi();

// function Car(brand,model,year){
//   this.mybrand = brand;
//   this.mymodel = model;
//   this.myYear = year;
// }

class Car {
  constructor(brand, model, year) {
    this.mybrand = brand;
    this.mymodel = model;
    this.myYear = year;
  }
  calculateSpeed(km, hour) {
    return `${this.mybrand} ${this.mymodel} speed is : ${km / hour} km/h`;
  }
}
Car.prototype.color = "red";
const myCar = new Car("BMW", "X5", 2000);
const myCar1 = new Car("Maercedes", "S500", 3000);
console.log(myCar.mybrand);
console.log(myCar.calculateSpeed(200, 5));
console.log(myCar1.calculateSpeed(100, 5));
console.log(myCar.color);


class Moto extends Car {
  constructor(brand, model, year) {
    super(brand, model, year);
  }
  a(){
    return 'a'
  }
}

const myMoto = new Moto("Yamaha","123",2000);
console.log(myMoto.calculateSpeed(400,5));
console.log(myMoto.a());


