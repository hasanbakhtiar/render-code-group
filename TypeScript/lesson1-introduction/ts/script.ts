// var startMessage: string = "Hello World";
// console.log(startMessage);

// type infoType = number | string;

// var infoOne: infoType = "a";
// console.log(infoOne);

// Literal Union Type
// type alertType = "success" | "error" | "warning";

// var alertData:alertType = "success";
// console.log(alertData);


// var infoTwo: boolean = true;
// console.log(infoTwo);


// var fruits: (string | number)[] = ["Banana", "Apple", "Limon"];
// var fruits: Array<string | number> = ["Banana", "Apple", "Limon",5];

// type productType = {
//     title:string,
//     price:number,
//     newDevice:boolean
// }

// interface productType {
//     title:string;
//     price:number;
//     newDevice:boolean;
// }

// interface productType {
//     color:string;

// }

// const product:productType = {
//     title: "Asus Zenbook",
//     price: 2300,
//     newDevice: true,
//     color:"black"
// }


// type dataOneType = {
//     title: string
// }

// type dataTwoType = {
//     price: number
// }

// type combinedType = dataOneType & dataTwoType;


// interface dataOneType {
//     title: string
// }

// interface dataTwoType extends dataOneType{
//     price: number
// }


interface laptopType {
    id: number,
    brand: string,
    model: string,
    price: number,
    specs: {
        processor: string,
        ram: string,
        storage: string
    },
    inStock: boolean
}



const laptops:laptopType[] = [
    {
        id: 1,
        brand: "Asus",
        model: "Zenbook 14",
        price: 2300,
        specs: {
            processor: "Intel Core i7",
            ram: "16GB",
            storage: "512GB SSD"
        },
        inStock: true
    },
    {
        id: 2,
        brand: "Apple",
        model: "MacBook Pro 14",
        price: 3800,
        specs: {
            processor: "Apple M3 Pro",
            ram: "18GB",
            storage: "512GB SSD"
        },
        inStock: true
    },
    {
        id: 3,
        brand: "Lenovo",
        model: "ThinkPad X1 Carbon",
        price: 2900,
        specs: {
            processor: "Intel Core i7",
            ram: "16GB",
            storage: "1TB SSD"
        },
        inStock: false
    },
    {
        id: 4,
        brand: "HP",
        model: "Pavilion 15",
        price: 1400,
        specs: {
            processor: "AMD Ryzen 5",
            ram: "8GB",
            storage: "256GB SSD"
        },
        inStock: true
    },
    {
        id: 5,
        brand: "Dell",
        model: "XPS 13",
        price: 3100,
        specs: {
            processor: "Intel Core i7",
            ram: "16GB",
            storage: "512GB SSD"
        },
        inStock: true
    }
];