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

// CICLO FOR
for (let i = 0; i < shopList.length; i++) {
  const listFor = document.querySelector(".output-ciclofor");
  let listElement = shopList[i];
  let li = document.createElement("li");
  li.innerHTML = listElement;
  listFor.append(li);
}

// CICLO WHILE
let c = 0;
while (c < shopList.length) {
  const listWhile = document.querySelector(".output-ciclowhile");
  let listElement = shopList[c];
  let li = document.createElement("li");
  li.innerHTML = listElement;
  listWhile.append(li);
  c++;
}


  
