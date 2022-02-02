
// First, tell us your name
let yourName = "Jorge Gomez"

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 //total quantity

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb


// Code to update name display
//credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
let gbPlusBtn = document.getElementById('add-gb')
gbPlusBtn.addEventListener('click', function() {
gb++;
//add total quantity
total++;
let totalQ = document.getElementById('qty-total')
totalQ.textContent = total;
//output increased gb quantity
let gbQuant = document.getElementById('qty-gb')
gbQuant.textContent = gb;
})

//Gingerbread Minus Button 
let gbMinBtn = document.getElementById('minus-gb')
gbMinBtn.addEventListener('click', function() {
if(gb == 0){
    gb = 0;
}
else{
gb--;
total--;
let totalQ = document.getElementById('qty-total')
totalQ.textContent = total;
}

let gbQuant = document.getElementById('qty-gb')
gbQuant.textContent = gb;
})


// Chocalate Chip cookie + button
let ccPlusBtn = document.getElementById('add-cc')
ccPlusBtn.addEventListener('click', function() {
cc++;

total++;
let totalQ = document.getElementById('qty-total')
totalQ.textContent = total;

let ccQuant = document.getElementById('qty-cc')
ccQuant.textContent = cc;
})


//Chocalate Minus Button 
let ccMinBtn = document.getElementById('minus-cc')
ccMinBtn.addEventListener('click', function() {
if(cc == 0){
    cc = 0;
}
else{
cc--;
total--;
let totalQ = document.getElementById('qty-total')
totalQ.textContent = total;
}
let ccQuant = document.getElementById('qty-cc')
ccQuant.textContent = cc;
})

//Sugar Cookie + button
let ssPlusBtn = document.getElementById('add-sugar')
ssPlusBtn.addEventListener('click', function() {
sugar++;
total++;
let totalQ = document.getElementById('qty-total')
totalQ.textContent = total;
let ssQuant = document.getElementById('qty-sugar')
ssQuant.textContent = sugar;
})


//Sugar Minus Button 
let ssMinBtn = document.getElementById('minus-sugar')
ssMinBtn.addEventListener('click', function() {
if(sugar == 0){
    sugar = 0;
}
else{
sugar--;
total--;
let totalQ = document.getElementById('qty-total')
totalQ.textContent = total;
}
let ssQuant = document.getElementById('qty-sugar')
ssQuant.textContent = sugar;

})