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

// CICLO FOR
for (let i = 0; i < shopList.length; i++) {
  let listElement = shopList[i];
  let li = document.createElement("li");
  li.innerHTML = listElement;
  ulFor.append(li);
}

// CICLO WHILE
let c = 0;
while (c < shopList.length) {
  let listElement = shopList[c];
  let li = document.createElement("li");
  li.innerHTML = listElement;
  ulWhile.append(li);
  c++;
}