import {
    setValueOfSimilarElements
} from "./utilities.js";
import globalStyle from "./globalStyles.js";

// Get respective dom elements
const selectedText = document.querySelectorAll(".global-store-data");
const textPickerA = document.getElementById("marketing");
const textPickerB = document.getElementById("ceo");

textPickerB.onchange = (event) => {
    globalStyle.setPropertyValue("text", event.target.value);
    const text = globalStyle.getPropertyByName("text");

    setValueOfSimilarElements(selectedText, text);

    textPickerA.value = text;
    textPickerA.value = "";
    textPickerB.value = "";
};