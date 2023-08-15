// Modal Image//
const modalLuas = document.getElementById("modalLuas");
const modalKeliling = document.getElementById("modalKeliling");
const imgLuas = document.getElementById("imgLuas");
const imgKeliling = document.getElementById("imgKeliling");

// Display Hasil //
var displayHasilLuas = document.getElementById("displayHasilLuas");
var displayHasilKeliling = document.getElementById("displayHasilKeliling");

// Get Input Form Class
const inputElementLuas = document.getElementsByClassName("input-formLuas");
const inputElementKeliling = document.getElementsByClassName("input-formKeliling");


function hitungLuas(){
  const alasVal = document.getElementById('alas').value;
  const tinggiVal = document.getElementById('tinggi').value;
  var luas = parseInt(alasVal) * parseInt(tinggiVal) / 2;

  document.getElementById("alasValue").innerHTML = alasVal;
  document.getElementById("tinggiValue").innerHTML = tinggiVal;
  document.getElementById("luasHasil").innerHTML = luas;

  displayHasilLuas.style.display = "block";

  if (alasVal == "" || tinggiVal == ""){
    alert("Masukan Angka!")
    displayHasilLuas.style.display = "none";
  }
}

function hitungKeliling(){  
  const sisi1Val = document.getElementById('sisi1').value;
  const sisi2Val = document.getElementById('sisi2').value;
  const sisi3Val = document.getElementById('sisi3').value;

  var keliling = parseInt(sisi1Val) + parseInt(sisi2Val) + parseInt(sisi3Val);

  document.getElementById("sisi1Value").innerHTML = sisi1Val;
  document.getElementById("sisi2Value").innerHTML = sisi2Val;
  document.getElementById("sisi3Value").innerHTML = sisi3Val;
  document.getElementById("kelilingHasil").innerHTML = keliling;

  displayHasilKeliling.style.display = "block";

  if (sisi1Val == "" || sisi2Val == "" || sisi3Val == ""){
    alert("Masukan Angka!")
    displayHasilKeliling.style.display = "none";
  }
}

// Get All Input Element
function getAllInput(inputElement){
  for (let i = 0; i < inputElement.length; i++) {
    inputElement[i].value = "";
  }
}

function resetButtonLuas(){
  displayHasilLuas.style.display = "none";
  getAllInput(inputElementLuas);
}

function resetButtonKeliling(){
  displayHasilKeliling.style.display = "none";
  getAllInput(inputElementKeliling);
}

// Display Modal Image //
imgLuas.onclick = function(){
  modalLuas.style.display = "block";
}

imgKeliling.onclick = function(){
    modalKeliling.style.display = "block";
}


// Close Button Modal //
const spanLuas = document.getElementsByClassName("closeLuas")[0];
const spanKeliling = document.getElementsByClassName("closeKeliling")[0];

spanLuas.onclick = function() {
  modalLuas.style.display = "none";
}

spanKeliling.onclick = function() {
  modalKeliling.style.display = "none";
}