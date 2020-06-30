var numField1 = document.getElementById('numField1');
var resultField = document.getElementById('resultField');
var form = document.getElementById('tithecalculator');

form.addEventListener('submit', function(event){
  if (!numField1.value){
    alert('Please enter the amount in the required boxes');
  }
  else{
    var x = parseFloat(numField1.value);
    var percent = 0.10 * x;
    resultField.innerText = "Your calculated tithe is  " + Math.round(percent) + " dollars";
    event.preventDefault();
  }
});
