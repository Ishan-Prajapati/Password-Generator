
const btn = document.querySelector('button')
// console.log(rangval)

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

      // Log the entire allItem array after the loop
    randomGenerator(allItem.join(''))
});

 function randomGenerator(arr){
    const rangval = document.getElementById('range').value
    let final_arr=[]
   for(let i = 0;i<rangval;i++){

       let d = Math.floor(Math.random()*arr.length)
       final_arr.push(arr[d])
    }
    console.log(final_arr.join(''))
 }
