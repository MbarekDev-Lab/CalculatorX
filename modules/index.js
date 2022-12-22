// Your code goes here!

// import files
// import "./aspect-ratio.js"
// import "./percentage.js"

import {calculateAspectRatio } from "./aspect-ratio.js"
import {modulo, percentage, percentageOf, difference } from "./percentage.js"

const modulo_1 = document.getElementById("modulo_1")
const modulo_2 = document.getElementById("modulo_2")
const moduloForm = document.getElementById("modulo-form")
const moduloResult = document.getElementById("modulo_result")

// modulo_1.addEventListener("keyup", () =>{
//     moduloResult.value = modulo(modulo_1.value, modulo_2.value,)
// })
// modulo_2.addEventListener("keyup", () =>{
//     moduloResult.value = modulo(modulo_1.value, modulo_2.value)
// })
moduloForm.addEventListener("input", (e) => {
     if (e.target.id == "modulo_1" || e.target.id =="modulo_2" ){
         moduloResult.value = modulo(modulo_1.value, modulo_2.value)

     }
});

const percentage_1 = document.getElementById("percentage_1")
const percentage_2 = document.getElementById("percentage_2")
const percentage_result = document.getElementById("percentage_result")
const percentageForm = document.getElementById("percentage-form")

percentageForm.addEventListener("input", (e) => {
    if (e.target.id == "percentage_1" || e.target.id == "percentage_2"){
        percentage_result.value = percentage(percentage_1.value, percentage_2.value)
    }
})

const difference_1 = document.getElementById("difference_1")
const difference_2 = document.getElementById("difference_2")
const difference_result = document.getElementById("difference_result")
const differenceForm = document.getElementById("difference-form")

differenceForm.addEventListener("input", (e) => {
    if (e.target.id == "difference_1" || e.target.id == "difference_2"){
        difference_result.value = percentageOf(difference_1.value, difference_2.value)
    }
})

// ratio Element
const originalWidth = document.getElementById("ratio_1")
const originalHeight = document.getElementById("ratio_2")
const newWidth = document.getElementById("ratio_result-width");
const newHeight = document.getElementById("ratio_result-height")
// console.log( "hello")
newWidth.addEventListener("input",() => {

    console.log( newWidth.value)
    newHeight.value = calculateAspectRatio(originalWidth.value, originalHeight.value, newWidth.value, "w");
});

