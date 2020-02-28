const img_input = document.getElementById('input_img');
const memetextdown = document.getElementById('textdown');
const memetextup = document.getElementById('textup');

const imgbox = document.getElementById('imgbox');

img_input.addEventListener ('change', function(){ 
    document.getElementById('image').src = window.URL.createObjectURL(this.files[0]);
});

memetextdown.addEventListener('keyup', function(){
    document.getElementById('memedown').innerText = memetextdown.value;
});

memetextup.addEventListener('keyup', function(){
    document.getElementById('memeup').innerText = memetextup.value;
});