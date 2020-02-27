document.body.style.background = localStorage.background;
document.body.style.color = localStorage.color;
document.getElementById('post').style.fontSize = localStorage.fontSize;
document.body.style.fontFamily = localStorage.fontFamily;
document.getElementById('post').style.letterSpacing = localStorage.letterSpacing;
const buttondark = document.getElementById('darkmode');
const buttonlight = document.getElementById('lightmode');
const buttonplus = document.getElementById('plusfont');
const buttonless = document.getElementById('lessfont');
const spacingplus = document.getElementById('spacingplus');
const spacingless = document.getElementById('spacingless');
const fontFamily = document.getElementById('font');

buttondark.addEventListener('click', function(){
    localStorage.setItem('background', '#000');
    localStorage.setItem('color', '#fff');

    document.body.style.background = localStorage.background;
    document.body.style.color = localStorage.color;

});

buttonlight.addEventListener('click', function(){
    localStorage.setItem('background', 'rgb(225 , 213 , 201)');
    localStorage.setItem('color', '#000');

    document.body.style.background = localStorage.background;
    document.body.style.color = localStorage.color;

});

buttonplus.addEventListener('click', function(){
    localStorage.setItem('fontSize', 'xx-large');
    document.getElementById('post').style.fontSize = localStorage.fontSize;
});

buttonless.addEventListener('click', function(){
    localStorage.setItem('fontSize', '20px');
    document.getElementById('post').style.fontSize = localStorage.fontSize;
});

spacingplus.addEventListener('click', function(){
    localStorage.setItem('letterSpacing', '3px');
    document.getElementById('post').style.letterSpacing = localStorage.letterSpacing;
});

spacingless.addEventListener('click', function(){
    localStorage.setItem('letterSpacing', '0px');
    document.getElementById('post').style.letterSpacing = localStorage.letterSpacing;
});

fontFamily.addEventListener('change', function(){
    localStorage.setItem('fontFamily', this.value);
    document.body.style.fontFamily = localStorage.fontFamily;
});