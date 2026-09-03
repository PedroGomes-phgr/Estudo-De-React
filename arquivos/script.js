// 1 - var, let , const

//3 metod filter

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const highNumbers = arr.filter((n) => {
  if (n >= 6) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "pedro", available: true },
  { name: "eu", available: true },
  { name: "peeedro", available: false },
  { name: "peiidro", available: true },
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);

//metod map

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira elétrica", price: 200.9, category: "Eletro" },
  { name: "Fogão", price: 520.9, category: "Eletro" },
  { name: "Calça", price: 10.9, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Eletro") {
    product.price = product.price * 0.5;
    product.onSale = true;
  }
});

console.log(products);

// template literals
const userName = "Pedro";
const age = 30;

console.log(`O NOME DO USER É ${userName}.`);

//DESTRUCTURING

const fruits = ["maça", "laranja", "mamao"];

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f3);

const productDetails = {
  name: "Mouse",
  price: 10.0,
  category: "Periférico",
  color: "Cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} `,
);

//spread operator

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];
const a5 = [0, ...a2, 4];
console.log(a5);

//classe
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa gola v", 20);

console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tenis Air max 90", 720);

console.log(tenis.productWithDiscount(50));
