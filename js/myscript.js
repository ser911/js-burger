// definizione variabili
var burgerName = document.getElementById("burger-name");
var calculate = document.getElementById("calc");
var discountCoupons = ["standard20"]

// aggiunta evento click button - calculate
calculate.addEventListener("click",
function(){

// controllo nome
if (burgerName.value !== "") {

// aggiunta ingredienti
var ingredients = document.getElementsByClassName("add-ing");

// prezzo base
var total = 50;

// ciclo ingredienti
for (var i = 0; i < ingredients.length; i++) {
  if (ingredients[i].checked == true) {
total = total + parseInt(ingredients[i].value);
  }
}

// controllo per eventuali coupon
if (discountCoupons.includes(discount.value)) {
  total = total - total * 0.2;
}

// stampa finale
document.getElementById("price").innerHTML = "$ " + total;
}

// messaggio d'errore in caso di nome assente
else {
    alert("Inserisci un nome valido")
}

}
);
