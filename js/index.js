// Import list options from common library.
import {ylaosaVaihtoehdot, alaosaVaihtoehdot, jalkineVaihtoehdot} from "./common.js"

// Variables for HTML elements
const button = document.querySelector('button')
const ylaosaOutput = document.getElementById('ylaosa')
const alaosaOutput = document.getElementById('alaosa')
const jalkineetOutput = document.getElementById('jalkineet')

/*
Event listener fot outfit generator button.
Gets a random piece of clothing for upper body, lower body and shoes
and sets the values to corresponding HTML elements.
*/
button.addEventListener('click', () => {
    const ylaosaIndex = getRandomIntNumberInRange(0, ylaosaVaihtoehdot.length)
    const alaosaIndex = getRandomIntNumberInRange(0, alaosaVaihtoehdot.length)
    const jalkineetIndex = getRandomIntNumberInRange(0, jalkineVaihtoehdot.length)
    ylaosaOutput.innerHTML = ylaosaVaihtoehdot[ylaosaIndex]
    alaosaOutput.innerHTML = alaosaVaihtoehdot[alaosaIndex]
    jalkineetOutput.innerHTML = jalkineVaihtoehdot[jalkineetIndex]
});

// Generates a random integer for given range.
const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}