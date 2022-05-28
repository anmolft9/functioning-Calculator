const buttons = document.querySelectorAll(".container>div");
const display = document.querySelector(".Main");

const buttonsArg = Array.from(buttons);

let stringCon = "";

buttonsArg.map((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;
    stringCon = stringCon + val;
    
    // displays(stringCon);

    if (val === "=") {
      return ttl();
    }

    // const total = eval(display.value);

    // console.log(stringCon);
  });
});

//function to display on the screen
const displays = (str) => {
  display.value = str;
};

///function to calculate the value
const ttl = () => {
  const total = eval(stringCon);
  displays(total);
  //   console.log(total);
};
