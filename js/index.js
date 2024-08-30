// document.getElementById('A1').addEventListener('click', function (){
//     if (this.classList.contains('green-color')) {
//         const gettingText = document.getElementById('A1');
//     gettingText.classList.remove('green-color');
//     gettingText.classList.add('text-[#03071250]');
//     } else {
//         const gettingText = document.getElementById('A1');
//     gettingText.classList.add('green-color');
//     gettingText.classList.remove('text-[#03071250]');
//     }
    
//     // console.log('hello')
// })

let selectedSeats = 0; // Declare selectedSeats globally

function buttonColor(event) {
    const button = event.target; // Use event.target to get the clicked button
    const maximumCanSelect = 4;

    // Toggle the color
    if (button.classList.contains('green-color')) {
        button.classList.remove('green-color');
        button.classList.add('text-[#03071250]');
        selectedSeats--;
    } else {
        if (selectedSeats < maximumCanSelect) { // Use < instead of <=
            button.classList.add('green-color');
            button.classList.remove('text-[#03071250]');
            selectedSeats++;
        } else {
            alert('Maximum 4 seats can be selected.');
        }
    }
}
