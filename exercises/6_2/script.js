
document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
    
    document.querySelectorAll('input').forEach(element => {
        document.getElementById('dados').append(element.value);
    });
    
});

const datepicker = document.getElementById('datepicker').DatePickerX; 	
datepicker.init({format: 'dd/mm/yyyy'});