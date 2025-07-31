const computer = {
  brand: "ROG",
  processor: "Ryzen",
  price: 78000,
  ssd: "4tb",
  monitor: "LG",
};

// console.log(Object.keys(computer));
// console.log(Object.values(computer));

const laptop = {
  brand: "ROG",
  processor: "Ryzen",
  price: 78000,
  ssd: "4tb",
  monitor: "LG",
  gpu: {
    brand: "ASUS",
    model: "RTX 5090ti",
    price: 490000,
  },
};
// console.log(laptop.gpu.color.base);

// Loop on object
for (let i in laptop) {
  console.log(`Key ${i} : ${laptop[i]} `);
}
