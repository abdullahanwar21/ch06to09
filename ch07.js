let x = 2, y = 1;
let res_ult = --x - --y + ++y + y--;
--x;
--x - --y;
--x - --y + ++y;
--x - --y + ++y + y--;
document.write(`x is ${x} </br>`);
document.write(`y is ${y} </br>`);
document.write(`res_ult is ${res_ult} </br>`);
