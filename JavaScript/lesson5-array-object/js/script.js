// let brands = Array("asus","acer","msi","samsung","lenovo","dell");
// let brands = [];
// brands[0]="asus";
// brands[1]="acer";
// brands[2]="lenovo";
// brands[3]="msi";
// brands[4]="samsung";
// console.log(brands);

// Array element → rəqəm index ilə (brands[0])
// Object property → string key ilə (brands["myitem"])
// const brands = ["asus", "acer", "msi", "samsung", "lenovo", "dell"];
// brands[6]="new brand";
// brands["myitem"] = "new brand";
// console.log(brands);

// const info = [1,2,3,["asus", "acer",[true,[0,1,2,["HELLO"],3,4],false], "msi"],4,5]
// console.log(info[3][2][1][3][0]);

//OBJECT
// let product = {
//   title: "Asus Zenbook",
//   price: 2300,
//   newDevice: true,
//   color: ["red", "green", "blue"],
// };

// console.log(product.color[1]);

// const info = [
//   "data",
//   {
//     title: "Asus Zenbook",
//     price: 2300,
//     newDevice: true,
//     color: ["red", "green", "blue"],
//   },
// ];

// console.log(info[1].color[0]);

const laptops = [
  {
    title: "Asus VivoBook 15",
    price: 850,
    newDevice: true,
    category: "budget",
  },
  { title: "Acer Aspire 5", price: 620, newDevice: false, category: "budget" },
  {
    title: "MSI Modern 15",
    price: 1100,
    newDevice: true,
    category: "business",
  },
  {
    title: "Samsung Galaxy Book3",
    price: 1300,
    newDevice: true,
    category: "business",
  },
  {
    title: "Lenovo IdeaPad 3",
    price: 550,
    newDevice: false,
    category: "budget",
  },
  {
    title: "Dell Inspiron 15",
    price: 780,
    newDevice: false,
    category: "budget",
  },
  { title: "HP Pavilion 14", price: 670, newDevice: true, category: "budget" },
  {
    title: "Apple MacBook Air M2",
    price: 1450,
    newDevice: true,
    category: "premium",
  },
  {
    title: "Huawei MateBook D15",
    price: 720,
    newDevice: false,
    category: "business",
  },
  {
    title: "Toshiba Dynabook E10",
    price: 490,
    newDevice: false,
    category: "budget",
  },
];

// for (let index = 0; index < laptops.length; index++) {
//   if (laptops[index].category == "business") {
//     console.log(laptops[index].title + "-----" + laptops[index].price);
//   }
// }

// for (let index in laptops) {
//   if (laptops[index].category == "business") {
//     console.log(laptops[index].title);
//   }
// }

// for (let item of laptops) {
//     if (item.category == "business") {
//       console.log(item.title);
//     }
// }

// for (let item of laptops) {
//   switch (item.category) {
//     case "business":
//       console.log(item.title);

//       break;

//     default:
//       break;
//   }
// }
