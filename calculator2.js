const buttons = document.querySelectorAll(".container>div");

const arr = Array.from(buttons);

const displays = document.querySelector(".Main");
let strToDisplay = "";

let operators = ["+", "-", "*", "/"];
let lastOperator = "";

arr.map((btn) => {
  btn.addEventListener("click", () => {
    val = btn.innerText;

    //totaling
    if (val === "=") {
      const lastOp = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastOp)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }

      return total();
    }

    //clear display
    if (val === "AC") {
      strToDisplay = "";
      display(strToDisplay);
      return;
    }

    //delete the last char
    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    //operators
    if (operators.includes(val)) {
      lastOperator = val;
      const lastOpe = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastOpe)) {
        strToDisplay = strToDisplay.slice(0, -1);
        strToDisplay += val;
        return display(strToDisplay);
      }
    }

    //for dot operator
    if (val === ".") {
      if (lastOperator) {
        const operatorIndex = strToDisplay.indexOf(lastOperator);
        const numberset = strToDisplay.slice(operatorIndex);
        if (numberset.includes(".")) {
          return;
        }
      }
      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }

    strToDisplay += val;
    display(strToDisplay);
  });
});

//to diusplay

const display = (str) => {
  displays.value = str || 0;
};

//totaling
const total = () => {
  const ttl = eval(strToDisplay);
  display(ttl);
  strToDisplay = ttl.toString();
};
