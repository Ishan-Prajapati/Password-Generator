const rangval = document.getElementById('range').value
const btn = document.querySelector('button')


// console.log(allinput)


const allCharacter = {
    forLower: 'abcdefghijklmnopqrstuvwxyz',
    forUpper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    forDigit: '1234567890',
    forSymbol: '!@#$%^&*()-_=+{}[]|\\:;"<>,.?/~'
};

btn.addEventListener('click', () => {
    let allItem = []
    const allinput = document.querySelectorAll('input');

    allinput.forEach((e) => {
        if (e.checked) {
            let attr = e.getAttribute("id");
            allItem.push(allCharacter[attr]);  // Correctly access the property using attr as the key
            // console.log(allCharacter[attr]);   // Log the corresponding value from allCharacter
        }
    });

    console.log(allItem.join(''));  // Log the entire allItem array after the loop
});

 function randomGenerator(n){
    let d = Math.floor(Math.random()*n)
 }
