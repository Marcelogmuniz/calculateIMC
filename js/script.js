import { Modal } from "./modal.js";
import { alertError } from "./alertError.js";
import { notANumber, calculateIMC } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const valueNotANumber = notANumber(weight) || notANumber(height);

  if (valueNotANumber) {
    alertError.open();
    return;
  }

  alertError.close();

  const result = calculateIMC(weight, height);
  Modal.message.innerText = `Seu IMC é de ${result}`;
  Modal.open();
};

inputHeight.oninput = () => alertError.close();
inputWeight.oninput = () => alertError.close();
