const img_input = document.getElementById('input_img');
const memetext = document.getElementById('text');

const imgbox = document.getElementById('imgbox');

img_input.addEventListener ('change', function(){ 
    document.getElementById('image').src = window.URL.createObjectURL(this.files[0]);
});
