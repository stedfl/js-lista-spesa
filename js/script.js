const shopList = [
  "acqua",
  "caffè",
  "pasta",
  "succo di arancia",
  "ananas",
  "melone",
  "zucchero",
  "sale",
  "uova",
  "farina 00",
  "farina integrale"
];

const ulFor = document.createElement("ul");
ulFor.className = "output ciclofor";
document.querySelector(".lista.for").append(ulFor);

const ulWhile = document.createElement("ul");
ulWhile.className = "output ciclowhile";
document.querySelector(".lista.while").append(ulWhile);
const randomNumb = Math.floor(Math.random()*shopList.length);

// CICLO FOR
for (let i = 0; i < shopList.length; i++) {
  const listElement = shopList[i];
  const li = document.createElement("li");
  li.innerText = listElement;
  if (i === randomNumb) {
    li.className = "wrong";
  }
  ulFor.append(li);
}

// CICLO WHILE
let c = 0;
while (c < shopList.length) {
  const listElement = shopList[c];
  const li = document.createElement("li");
  li.innerText = listElement;
  if (c === randomNumb) {
    li.className = "wrong";
  }
  ulWhile.append(li);
  c++;
}