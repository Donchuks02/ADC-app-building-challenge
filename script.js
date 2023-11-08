'use strict'
const inputFieldValue = document.querySelector('#inputField')
const submitButton = document.querySelector('#SubmitBtn')
const popUpEl = document.querySelector('.pop-up-section')
const errorMessage = document.querySelector('#errorMsg')
const total_purchase = document.querySelector('#totalPurchase')
const roundedUpValue = document.querySelector('#roundedUpValue')
const amountDonated = document.querySelector('#donatedAmount')
const yesButton = document.querySelector('#yesBtn')
const noButton = document.querySelector('#noBtn')







//  Event listener function for the Submit button
submitButton.addEventListener('click', function() {
    let inputValue = inputFieldValue.value
    if (inputValue == false) {
        errorMessage.textContent = 'Please enter the total purchase'

    } else(popUpEl.classList.remove('hidden')); {


        total_purchase.textContent = inputValue
        roundedUpValue.textContent = `${Math.ceil(inputValue)}.00`;

        let rndValue = Math.ceil(inputValue) - inputValue
        let roundedResult = parseFloat(rndValue.toPrecision(12))
        amountDonated.textContent = roundedResult

    }






})


//  Event listener function for the yes button

yesButton.addEventListener('click', function() {
    let inputValue = Number(inputFieldValue.value)
    let result = Math.ceil(inputValue)
    inputValue = result
    popUpEl.classList.add('hidden')
    inputFieldValue.value = `${inputValue}.00`;
    errorMessage.textContent = ' '
    submitButton.classList.add('hidden')

})



//  Event listener function for the No button

noButton.addEventListener('click', function() {
    popUpEl.classList.add('hidden')
    submitButton.classList.add('hidden')
    errorMessage.textContent = ' '

})