//get all the buttons
const buttons = document.querySelectorAll(".container>div");
const buttonsArg = Array.from(buttons);

const display = document.querySelector(".Main"); //selcting the display element

let strToDisplay = ""; ///display

const operators = ["+", "-", "*", "/"];
let lastOperator = "";

buttonsArg.map((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    ///turn on and off
    if (val === "off") {
      //   strdisplay = "";
      off();
    }

    ///clear the display
    if (val === "AC") {
      strToDisplay = "";
      displays();
      return;
    }

    //////equals to
    if (val === "=") {
      ///to ignore the last operator if present and display the rest of the calculated value
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total(); ///displaying the total
    }

    /////clear the last value
    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return displays(strToDisplay);
    }

    /////for operators
    if (operators.includes(val)) {
      lastOperator = val;
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
        strToDisplay += val;

        return displays(strToDisplay);
      }
    }

    if (val === ".") {
      if (lastOperator) {
        const operatorIndex = strToDisplay.lastIndexOf(lastOperator); ///last index of the string on the display

        const lastNumberSet = strToDisplay.slice(operatorIndex + 1);

        if (lastNumberSet.includes(".")) {
          return;
        }
        // console.log(strToDisplay, lastNumberSet);
      }
      if (!lastOperator && strToDisplay.includes(".")) return;
    }

    // console.log(val);

    strToDisplay += val; ////to show the contatinated value on the display

    displays(strToDisplay);
    // console.log(strToDisplay);
  });
});
///////////////////////////////////////////////////////////////////////////
////////function to display the string on the display
const displays = (str) => {
  // display.innerText=str;
  display.value = str || "0";
};

// const off = () => {
//   display.value = "";
// };
/////function for totaling the values after = is invoked
const total = () => {
  const ttl = eval(strToDisplay);
  displays(ttl);
  strToDisplay = ttl.toString();
};
