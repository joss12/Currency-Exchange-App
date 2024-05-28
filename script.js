const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_tow = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");


const rateEl = document.getElementById("rate");
const swap = document.getElementById('swap');

function calculate(){
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_tow.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data =>{
        const rate = data.rates[currency_two];
        rate.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
    })

}

//Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_tow.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', ()=>{
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_tow.value;
    currencyEl_tow.value = temp;
    calculate();
});
calculate();

