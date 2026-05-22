const laptops = [
  {
    id: 1,
    brand: "Apple",
    model: "MacBook Air M2",
    price: 1199,
    ram: "8GB",
    storage: "256GB SSD",
    cpu: "M2",
  },
  {
    id: 2,
    brand: "Apple",
    model: "MacBook Pro M3",
    price: 1999,
    ram: "16GB",
    storage: "512GB SSD",
    cpu: "M3 Pro",
  },
  {
    id: 3,
    brand: "ASUS",
    model: "ROG Zephyrus G14",
    price: 1599,
    ram: "16GB",
    storage: "1TB SSD",
    cpu: "AMD Ryzen 9",
  },
  {
    id: 4,
    brand: "ASUS",
    model: "Zenbook 14 OLED",
    price: 949,
    ram: "16GB",
    storage: "512GB SSD",
    cpu: "Intel Core i7",
  },
  {
    id: 5,
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    price: 1749,
    ram: "32GB",
    storage: "1TB SSD",
    cpu: "Intel Core i7",
  },
  {
    id: 6,
    brand: "Lenovo",
    model: "IdeaPad Slim 3",
    price: 499,
    ram: "8GB",
    storage: "512GB SSD",
    cpu: "AMD Ryzen 5",
  },
  {
    id: 7,
    brand: "Dell",
    model: "XPS 13",
    price: 1299,
    ram: "16GB",
    storage: "512GB SSD",
    cpu: "Intel Core i5",
  },
  {
    id: 8,
    brand: "HP",
    model: "Spectre x360",
    price: 1399,
    ram: "16GB",
    storage: "1TB SSD",
    cpu: "Intel Core i7",
  },
  {
    id: 9,
    brand: "Acer",
    model: "Nitro V 15",
    price: 799,
    ram: "16GB",
    storage: "512GB SSD",
    cpu: "Intel Core i5",
  },
  {
    id: 10,
    brand: "MSI",
    model: "Cyborg 15",
    price: 1099,
    ram: "16GB",
    storage: "512GB SSD",
    cpu: "Intel Core i7",
  },
];

const phones = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 15 Pro",
    price: 999,
    ram: "8GB",
    storage: "128GB",
    battery: "3274 mAh",
  },
  {
    id: 2,
    brand: "Apple",
    model: "iPhone 13",
    price: 599,
    ram: "4GB",
    storage: "128GB",
    battery: "3227 mAh",
  },
  {
    id: 3,
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    price: 1299,
    ram: "12GB",
    storage: "256GB",
    battery: "5000 mAh",
  },
  {
    id: 4,
    brand: "Samsung",
    model: "Galaxy A55",
    price: 449,
    ram: "8GB",
    storage: "128GB",
    battery: "5000 mAh",
  },
  {
    id: 5,
    brand: "Xiaomi",
    model: "Redmi Note 13 Pro",
    price: 299,
    ram: "8GB",
    storage: "256GB",
    battery: "5000 mAh",
  },
  {
    id: 6,
    brand: "Xiaomi",
    model: "14 Ultra",
    price: 1199,
    ram: "16GB",
    storage: "512GB",
    battery: "5000 mAh",
  },
  {
    id: 7,
    brand: "Google",
    model: "Pixel 8 Pro",
    price: 999,
    ram: "12GB",
    storage: "128GB",
    battery: "5050 mAh",
  },
  {
    id: 8,
    brand: "OnePlus",
    model: "12",
    price: 799,
    ram: "16GB",
    storage: "256GB",
    battery: "5400 mAh",
  },
  {
    id: 9,
    brand: "Nothing",
    model: "Phone (2)",
    price: 599,
    ram: "12GB",
    storage: "256GB",
    battery: "4700 mAh",
  },
  {
    id: 10,
    brand: "Realme",
    model: "GT 6T",
    price: 379,
    ram: "8GB",
    storage: "128GB",
    battery: "5500 mAh",
  },
];

// const filterData = (data) => {
//   data.map((item, index) => {
//     console.log(item.brand);
//   });
// };

// filterData(phones);


// const filterData = (data, filterCase) => {
//   for (let item of data) {
//     if (filterCase == item.brand) {
//       console.log(item);
//     }
//   }
// };
// filterData(laptops,"Lenovo");
// filterData(phones,"Samsung")

// IIFE (Immediately Invoked Function Expression)
// ((a,b)=>{
//     console.log(a,b);

// })(20,30)

// (function(a,b){
//   console.log(a,b);
// })(10,20)

// ARROW FUNCTION (FUNCTION EXPRESSION)
// ()=>{}
// const info = (a = 1, b = 2) => {
//   console.log(a + b);
// };
// info(5, 10);

// FUNCTION EXPRESSION
// const info = function (a = 1, b = 2) {
//   console.log(a + b);
// };
// info(5,10);

// FUNCTION DECLARATION
// info(5,10);
// function info(a=1,b=2){
//   console.log(a+b);
// }

// let laptopBrands = ["asus", "lenovo", "msi", "dell"];
// let phoneBrands = ["samsung", "zte", "oneplus", "oppo", "mi"];

// function showBrands(brands) {
//   for (let item of brands) {
//     console.log(item);
//   }
// }

// showBrands(laptopBrands);
// showBrands(phoneBrands);

// function name(params) {}

// let lang = "ru";
// lang==="en" ? console.log("Hello everyone") : lang==="az"? console.log("Herkese Salam"): console.log("dil secin");
