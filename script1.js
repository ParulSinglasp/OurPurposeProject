let frames = [
  { price: 3000, brand: "Rayban", lens: "single" },
  { price: 2500, brand: "Fossil", lens: "single" },
  { price: 2200, brand: "Vincent", lens: "progressive" },
  { price: 1800, brand: "Local", lens: "single" },
];

let total = 0;
let free = 0;
let lens = 0;
let coupon = 0;
let lk = 500;

let eligible = [];

for (let i = 0; i < frames.length; i++) {
  total = total + frames[i].price;

  if (
    frames[i].price > 2000 &&
    frames[i].brand != "Fossil" &&
    frames[i].brand != "John Jacobs"
  ) {
    eligible.push(frames[i]);
  }

  if (frames[i].lens == "single") {
    lens = lens + 1500;
  }
}

eligible.sort((a, b) => a.price - b.price);

for (let i = 0; i < eligible.length - 1; i = i + 2) {
  free = free + eligible[i].price;
}

if (total > 4000) {
  coupon = 500;
}

let discount = free + lens + coupon + lk;

let max = total * 0.4;

if (discount > max) {
  discount = max;
}

let pay = total - discount;

console.log("Total:", total);
console.log("Pay:", pay);