let userNum = +prompt("Enter A Number for Table ");
for (i = 1; i <= 10; i++) {
  let number = userNum || 5;
  let result = number * i;
  document.write(`<h2> ${i} X  ${number} = ${result} </h2>`);
}
