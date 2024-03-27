document
  .getElementById("degistirButonu")
  .addEventListener("click", function () {
    document.getElementById("paragraf").textContent =
      "Merhaba, DOM dünyasına hoş geldiniz!";
  });

document.getElementById("toplaButonu").addEventListener("click", function () {
  var sayi1 = document.getElementById("sayi1").value;
  var sayi2 = document.getElementById("sayi2").value;
  var toplam = parseInt(sayi1) + parseInt(sayi2);
  document.getElementById("sonuc").textContent = "Toplam: " + toplam;
});
