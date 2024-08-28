document.getElementById('A1').addEventListener('click', function (){
    if (this.classList.contains('green-color')) {
        const gettingText = document.getElementById('A1');
    gettingText.classList.remove('green-color');
    gettingText.classList.add('text-[#03071250]');
    } else {
        const gettingText = document.getElementById('A1');
    gettingText.classList.add('green-color');
    gettingText.classList.remove('text-[#03071250]');
    }
    
    // console.log('hello')
})

function buttonColor(){
    addingAndRemovingClass();
}