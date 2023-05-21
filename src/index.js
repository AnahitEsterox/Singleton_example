import globalStyle from "./globalStyles";

const globalStateElem = document.querySelector(".global-state .global-store-data");

globalStateElem.innerHTML = globalStyle.getPropertyByName("text");
