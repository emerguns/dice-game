
var randomNumero1 =  Math.floor(Math.random() * 6) + 1;

var randomDadoImagen = "dice" + randomNumero1 + ".png";

var randomImagenRuta = "images/" + randomDadoImagen;

var imagen1 = document.querySelectorAll("img")[0];

imagen1.setAttribute("src", randomImagenRuta);

var randomNumero2 = Math.floor(Math.random() * 6) +1;

var randomImagenRuta2 = "images/dice" + randomNumero2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagenRuta2);


if (randomNumero1 > randomNumero2) {
    document.querySelector ("h1").innerHTML = "🎖️ jugador 1 gana";
}
else if (randomNumero2 > randomNumero1) {
    document.querySelector ("h1").innerHTML = "🎖️ jugador 2 gana";
}
else {
    document.querySelector ("h1").innerHTML = "Empate";
}






