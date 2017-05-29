var numArr = [];

function printStr() {
    document.getElementById("screen").innerHTML = numArr.join("");
}

// numbers
document.getElementById("0").onclick = push0;
function push0() {
  numArr.push("0");
  printStr();
}

document.getElementById("1").onclick = push1;
function push1() {
  numArr.push("1");
  printStr();
}

document.getElementById("2").onclick = push2;
function push2() {
  numArr.push("2");
  printStr();
}

document.getElementById("3").onclick = push3;
function push3() {
  numArr.push("3");
  printStr();
}

document.getElementById("4").onclick = push4;
function push4() {
  numArr.push("4");
  printStr();
}

document.getElementById("5").onclick = push5;
function push5() {
  numArr.push("5");
  printStr();
}

document.getElementById("6").onclick = push6;
function push6() {
  numArr.push("6");
  printStr();
}

document.getElementById("7").onclick = push7;
function push7() {
  numArr.push("7");
  printStr();
}

document.getElementById("8").onclick = push8;
function push8() {
  numArr.push("8");
  printStr();
}

document.getElementById("9").onclick = push9;
function push9() {
  numArr.push("9");
  printStr();
}

document.getElementById("decimal").onclick = pushDecimal;
function pushDecimal() {
  numArr.push(".");
  printStr();
}

// operators
document.getElementById("divide").onclick = pushDivide;
function pushDivide() {
  numArr.push("/");
  printStr();
}

document.getElementById("multiply").onclick = pushMultiply;
function pushMultiply() {
  numArr.push("*");
  printStr();
}

document.getElementById("subtract").onclick = pushSubtract;
function pushSubtract() {
  numArr.push("-");
  printStr();
}

document.getElementById("add").onclick = pushAdd;
function pushAdd() {
  numArr.push("+");
  printStr();
}

document.getElementById("equals").onclick = pushEquals;
function pushEquals() {
  numStr = numArr.join("");
  answer = eval(numStr);
  numArr.splice(0, (numArr.length), answer);
  document.getElementById("screen").innerHTML = numArr;
}

document.getElementById("clear").onclick = reset;
function reset() {
  numArr = [];
  document.getElementById("screen").innerHTML = "";
}