let artikelId = sessionStorage.getItem("artikelId");
let artikels = JSON.parse(sessionStorage.getItem("artikels"));

artikelId = parseInt(artikelId.replace("artikel", ""));

let artikel = artikels[artikelId];
let text = artikels.text;

document.getElementById("detail__titel").innerText = artikel.titel;

function veranderFoto(id, src, alt){
    let foto = document.getElementById(id);
    foto.src = "assets/" + src;
    foto.alt = alt;
}
veranderFoto("detail__foto1", artikel.fotos[0].naam, artikel.fotos[0].alt);
veranderFoto("detail__foto2", artikel.fotos[1].naam, artikel.fotos[1].alt);


function voegTextToe(id, text){
    let textP = document.createElement("p");
    let textDiv = document.getElementById(id);

    textP.textContent = text;
    textDiv.appendChild(textP);
}
let text1 = document.getElementById("detail__text1");
text1.innerHTML = "";

voegTextToe("detail__text1", artikel.text[0]);
voegTextToe("detail__text1", artikel.text[1]);

let text2 = document.getElementById("detail__text2");
text2.innerHTML = "";

voegTextToe("detail__text2", artikel.text[2]);
voegTextToe("detail__text2", artikel.text[3]);
voegTextToe("detail__text2", artikel.text[4]);

let source = document.createElement("a");
source.href = "https://www.advocaat.be/nl";
source.target = "_blank";
source.innerText = "Source: https://www.advocaat.be/nl";
document.getElementById("detail__text2").appendChild(source);