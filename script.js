'use strict'
const inputFieldValue = document.querySelector('#inputField')
const submitButton = document.querySelector('#SubmitBtn')
const popUpEl = document.querySelector('.pop-up-section')
const errorMessage = document.querySelector('#errorMsg')
const yesButton = document.querySelector('#yesBtn')
const noButton = document.querySelector('#noBtn')

//  Event listener function for the Submit button
submitButton.addEventListener('click', function() {
    let inputValue = inputFieldValue.value
    if (inputValue == false) {
        errorMessage.textContent = 'Please enter the total purchase'

    } else(popUpEl.classList.remove('hidden'))



})


//  Event listener function for the yes button

yesButton.addEventListener('click', function() {
    let inputValue = Number(inputFieldValue.value)
    let result = Math.ceil(inputValue)
    inputValue = result
    popUpEl.classList.add('hidden')
    inputFieldValue.value = `${inputValue}.00`;
    errorMessage.textContent = ` `

})

//  Event listener function for the No button

noButton.addEventListener('click', function() {
    popUpEl.classList.add('hidden')

})