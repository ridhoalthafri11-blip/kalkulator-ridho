var tampilan = document.getElementById("tampilan");
var angkaTombol = document.getElementsByClassName("angka");
var operatorTombol = document.getElementsByClassName("operator");
var samaDenganTombol = document.getElementsByClassName("sama-dengan");
var resetTombol = document.getElementsByClassName("reset");

var sementara = "";
var operator = "";
var angka1 = null;
var angka2 = null;
var hasilBaru = false;


for (var i = 0; i < angkaTombol.length; i++) {
  angkaTombol[i].addEventListener("click", function () {
    if (hasilBaru) {
      tampilan.value = "";
      hasilBaru = false;
    }
    tampilan.value += this.textContent;
  });
}


for (var i = 0; i < operatorTombol.length; i++) {
  operatorTombol[i].addEventListener("click", function () {
    if (tampilan.value === "") return; 
    if (angka1 === null) {
      angka1 = parseFloat(tampilan.value);
      operator = this.innerHTML;
      tampilan.value += " " + operator + " ";
    } else {
      operator = this.innerHTML;
      tampilan.value += " " + operator + " ";
    }
  });
}

for (var i = 0; i < samaDenganTombol.length; i++) {
  samaDenganTombol[i].addEventListener("click", function () {
    var nilai = tampilan.value.split(" ");
    if (nilai.length < 3) return;
    angka1 = parseFloat(nilai[0]);
    operator = nilai[1];
    angka2 = parseFloat(nilai[2]);

    var hasil = 0;
    if (operator === "+") hasil = angka1 + angka2;
    else if (operator === "-") hasil = angka1 - angka2;
    else if (operator === "x" || operator === "*") hasil = angka1 * angka2;
    else if (operator === "/") hasil = angka1 / angka2;

    tampilan.value = hasil;
    hasilBaru = true;
    angka1 = null;
    angka2 = null;
  });
}


for (var i = 0; i < resetTombol.length; i++) {
  resetTombol[i].addEventListener("click", function () {
    tampilan.value = "";
    sementara = "";
    operator = "";
    angka1 = null;
    angka2 = null;
    hasilBaru = false;
  });
}
