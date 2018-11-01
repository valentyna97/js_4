const link = document.querySelector('a');
link.textContent = 'MDN';
link.href = 'https://programmingmentor.com';
const sect=document.querySelector('section');
for (let i = 0; i<100; i++) {
const para = document.createElement('p');
para.textContent = i+1 +':You have won the price';
sect.appendChild(para);
para.classList.add('hightlight');
}
const img = document.querySelector('img');
sect.appendChild(img);

const h1 = document.querySelector('h1');
h1.parentNode.removeChild(h1);
$('.hide-pars').click(hidePars);
function hidePars() {
    $('p').toggle(1000);
    
}