function total(){
  var firstInput = document.getElementById("number1").value;
  var secondInput = document.getElementById("number2").value;
  var addition = Number(firstInput) + Number(secondInput);
  document.getElementById("output").innerHTML = addition;
}
