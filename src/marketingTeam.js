import {
    setValueOfSimilarElements
} from "./utilities.js";
import globalStyle from "./globalStyles.js";

const selectedText = document.querySelectorAll(".global-store-data");
const textPickerA = document.getElementById("marketing");
const textPickerB = document.getElementById("ceo");

textPickerA.onchange = (event) => {
    globalStyle.setPropertyValue("text", event.target.value);
    const text = globalStyle.getPropertyByName("text");

    setValueOfSimilarElements(selectedText, text);

    textPickerB.value = text;
    textPickerA.value = "";
    textPickerB.value = "";
};