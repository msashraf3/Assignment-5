let selectedSeats = 0; // selectedSeats globally

let alertShow = false;

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

        //updating the seatCount
        seatCount.innerText = selectedSeats;

        //updating the seat left
        const seatsLeft = document.getElementById('seats-left');
        const seatsLeftCount = document.getElementById('seats-left').innerText;
        const seatLeftCountParse = parseInt(seatsLeftCount);
        const seatLeftAfter = seatLeftCountParse + 1;
        seatsLeft.innerText = seatLeftAfter;

    } else {
        if (selectedSeats < maximumCanSelect) {
            button.classList.add('green-color');
            button.classList.remove('text-[#03071250]');
            selectedSeats++;

            //updating the seatCount
            seatCount.innerText = selectedSeats;



            //updating the seat left
            const seatsLeft = document.getElementById('seats-left');
            const seatsLeftCount = document.getElementById('seats-left').innerText;
            const seatLeftCountParse = parseInt(seatsLeftCount);
            const seatLeftAfter = seatLeftCountParse - 1;
            seatsLeft.innerText = seatLeftAfter;

        } else {
            alert('Maximum 4 seats can be selected.');
            alertShow = true;
        }
    }





    //changing the coupon button
    if (selectedSeats === 4) {
        couponButton.classList.remove('btn-disabled');
    } else {
        couponButton.classList.add('btn-disabled');
    }
}


//adding seats to the selection div

let selectedSeats2 = 0;
const MAX_SEATS = 4;
const selectedSeats3 = {}; // Object to keep track of selected seats

const seatBtn = document.getElementsByClassName('all-seats');

for (const seat of seatBtn) {
    seat.addEventListener('click', function (event) {
        const seatNumber = event.target.innerText;
        const selectedSeatsDiv = document.getElementById('append-ticket');

        if (selectedSeats3[seatNumber]) {
            // Seat is already selected, so remove it
            const seatDiv = selectedSeats3[seatNumber];
            selectedSeatsDiv.removeChild(seatDiv);

            // Update selected seats count
            selectedSeats2--;

            // Remove seat from selectedSeats3 object
            delete selectedSeats3[seatNumber];

            updateTotal(-550);
            updateGrandTotal();

            //reseting the alert
            alertShow = false;
        } else {
            if (selectedSeats2 >= MAX_SEATS) {
                if (condition) {
                    alert('You cannot select more than ' + MAX_SEATS + ' seats.');
                    alertShow = true;
                }
                return;
            }

            // Seat is not selected, so add it
            const div = document.createElement('div');
            div.classList.add('flex', 'justify-between', 'mb-4');

            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            p3.classList.add('price');

            p1.innerText = seatNumber;
            p2.innerText = 'Economy';
            p3.innerText = 550;

            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);

            selectedSeatsDiv.appendChild(div);

            // Add seat to selectedSeats3 object
            selectedSeats3[seatNumber] = div;

            // Update selected seats count
            selectedSeats2++;

            updateTotal(p3.innerText);
            updateGrandTotal();
        }
    });
}







//total 

function updateTotal(value) {

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceParse = parseInt(totalPriceText);
    const finalPrice = totalPriceParse + parseInt(value);

    totalPrice.innerText = finalPrice;
}


// grand total

function updateGrandTotal(status) {

    if (status) {
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode === 'NEW15') {
            const total = document.getElementById('total-price').innerText;
            const totalParse = parseInt(total);
            const sumCoupon = totalParse * 0.15;
            const finalGrandTotal = totalParse - sumCoupon;
            document.getElementById('grand-total').innerText = finalGrandTotal;

            // hiding the full coupon div
            const couponDiv = document.getElementById('coupon-div').classList.add('hidden');


            // adding the discount div
            const discountedPrice = document.getElementById('discounted-price');
            discountedPrice.classList.remove('hidden');
            const h1 = document.createElement('h1');
            h1.classList.add('font-bold');
            h1.innerText = 'Discounted Price';


            const p4 = document.createElement('p');
            p4.classList.add('font-bold');
            p4.innerText = '-' + sumCoupon;

            // appending both
            discountedPrice.appendChild(h1);
            discountedPrice.appendChild(p4);

            // input value to empty
            const couponCodeText = document.getElementById('coupon-code');
            couponCodeText.value = '';


        } else if (couponCode === 'Couple 20') {
            const total = document.getElementById('total-price').innerText;
            const totalParse = parseInt(total);
            const sumCoupon = totalParse * 0.20;
            const finalGrandTotal = totalParse - sumCoupon;
            document.getElementById('grand-total').innerText = finalGrandTotal;


            // hiding the full coupon div
            const couponDiv = document.getElementById('coupon-div').classList.add('hidden');


            // adding the discount div
            const discountedPrice = document.getElementById('discounted-price');
            discountedPrice.classList.remove('hidden');
            const h1 = document.createElement('h1');
            h1.classList.add('font-bold');
            h1.innerText = 'Discounted Price';


            const p4 = document.createElement('p');
            p4.classList.add('font-bold');
            p4.innerText = '-' + sumCoupon;

            // appending both
            discountedPrice.appendChild(h1);
            discountedPrice.appendChild(p4);

            // input value to empty
            const couponCodeText = document.getElementById('coupon-code');
            couponCodeText.value = '';
        }
        else {
            alert('Please Enter A Valid Coupon Code.');
        }
    } else {
        const totalPrice = document.getElementById('total-price').innerText;
        const totalPriceParse = parseInt(totalPrice);

        document.getElementById('grand-total').innerText = totalPriceParse;
    }

}


// order button 
const passengerName = document.getElementById('passenger-name');
const phoneNumber = document.getElementById('phone-number');
const order = document.getElementById('order');


function updateButtonState() {
    const gettingNameValue = passengerName.value.trim();
    const gettingNumberValue = phoneNumber.value.trim();
    const seatCountText = seatCount.innerText;
    const seatCountTextParse = parseInt(seatCountText);
    // Check if both fields are filled
    if (gettingNameValue && gettingNumberValue && seatCountTextParse > 0) {
        order.classList.remove('btn-disabled');
    } else {
        order.classList.add('btn-disabled');
    }
}

// Add event listeners 
passengerName.addEventListener('keyup', updateButtonState);
phoneNumber.addEventListener('keyup', updateButtonState);



//conformation for the seats
function conformation(event) {
    const button = event.target;
    const secondSection = document.getElementById('conformation');
    const mainSection = document.getElementById('main-section');

    secondSection.classList.remove('hidden');
    mainSection.classList.add('hidden');

}