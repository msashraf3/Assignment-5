let selectedSeats = 0; // selectedSeats globally

const seatCount = document.getElementById('selected-seats');
const couponButton = document.getElementById('coupon-button');

function buttonColor(event) {
    const button = event.target; // Used event.target to get the clicked button
    const maximumCanSelect = 4;

    // Toggle the color
    if (button.classList.contains('green-color')) {
        button.classList.remove('green-color');
        button.classList.add('text-[#03071250]');
        selectedSeats--;
    } else {
        if (selectedSeats < maximumCanSelect) {
            button.classList.add('green-color');
            button.classList.remove('text-[#03071250]');
            selectedSeats++;
        } else {
            alert('Maximum 4 seats can be selected.');
        }
    }

    //updating the seatCount
    seatCount.innerText = selectedSeats;

    //changing the coupon button
    if (selectedSeats === 4) {
        couponButton.classList.remove('btn-disabled');
    } else {
        couponButton.classList.add('btn-disabled');
    }

}

// order button 
const passengerName = document.getElementById('passenger-name');
const phoneNumber = document.getElementById('phone-number');
const order = document.getElementById('order');

function updateButtonState() {
    const gettingNameValue = passengerName.value.trim();
    const gettingNumberValue = phoneNumber.value.trim();

    // Check if both fields are filled
    if (gettingNameValue && gettingNumberValue) {
        order.classList.remove('btn-disabled');
    } else {
        order.classList.add('btn-disabled');
    }
}

// Add event listeners 
passengerName.addEventListener('keyup', updateButtonState);
phoneNumber.addEventListener('keyup', updateButtonState);



//conformation for the seats
function conformation(event){
    const button = event.target;
    const secondSection = document.getElementById('conformation');
    const mainSection = document.getElementById('main-section');

    secondSection.classList.remove('hidden');
    mainSection.classList.add('hidden');

}