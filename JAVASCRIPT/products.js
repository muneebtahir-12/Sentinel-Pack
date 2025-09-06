let decrease=document.querySelector('#decrease');
let increase=document.querySelector('#increase');
let display=document.querySelector('#display');
let quote=document.querySelector('#quote');

let counter=95;
decrease.addEventListener('click',()=>{
counter--;
if(counter>100){
    alert(' You goes out of stock');
}
else{
display.innerHTML=counter;
}
});
increase.addEventListener('click',()=>{
counter++;
if(counter>100){
    alert(' You goes out of stock');
    counter--;
}
else{
display.innerHTML=counter;
}
});
display.innerHTML=counter;
quote.addEventListener('click',()=>{
alert('Your request has been accepted for ' + counter + ' items')
});