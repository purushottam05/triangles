const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector(".output");

function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
  const sum = sumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 180) {
    console.log("You are right!");
    outputEl.innerText = "You are right!";
  } else {
    console.log("OOPS, you're wrong :(");
    outputEl.innerText = "OOPS, you're wrong :(";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
