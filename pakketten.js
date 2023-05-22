let gekozenPakket = "";
let gekozenMaand = "";
let gekozenTotaalPrijs = "";
let gekozenBetaling = "";

let basic = document.getElementById("basicPakket");
let pro = document.getElementById("proPakket");
let full = document.getElementById("fullPakket");

let basicPrijs = [15, 14, 13];
let fullPrijs = [20, 19, 18];
let proPrijs = [25, 24, 23];

function Position(obj){
    let currenttop = 0;
    if (obj.offsetParent){
        do {
            currenttop += obj.offsetTop;
        }while ((obj = obj.offsetParent));
        return [currenttop];
    }
}

function laadVolgendeStap(type){
    basic.style.transform = "scale(1)";
    pro.style.transform = "scale(1)";
    full.style.transform = "scale(1)";
    basic.style.backgroundColor = "transparent";
    pro.style.backgroundColor = "transparent";
    full.style.backgroundColor = "transparent";

    let pakket = type;
    pakket = pakket.toUpperCase();
    let naam = document.getElementById("pakket_naam");
    naam.textContent = pakket;

    let prijsMaand3 = document.getElementById("prijs_3maand");
    let prijsMaand6 = document.getElementById("prijs_6maand");
    let prijsMaand12 = document.getElementById("prijs_12maand");

    switch (pakket){
        case "BASIC":
            prijsMaand3.textContent = basicPrijs[0];
            prijsMaand6.textContent = basicPrijs[1];
            prijsMaand12.textContent = basicPrijs[2];
            break;
        case "PRO":
            prijsMaand3.textContent = proPrijs[0];
            prijsMaand6.textContent = proPrijs[1];
            prijsMaand12.textContent = proPrijs[2];
            break;
        case "FULL":
            prijsMaand3.textContent = fullPrijs[0];
            prijsMaand6.textContent = fullPrijs[1];
            prijsMaand12.textContent = fullPrijs[2];
            break;
    }

    gekozenPakket = type;
    let selected = document.getElementById(type.toLowerCase() + "Pakket");
    selected.style.transform = "scale(1.05)";
    selected.style.backgroundColor = "#97CAD0";

    let volgendeStap = document.getElementById("paketten__volgendeStap")
    volgendeStap.style.display = "block";
    window.scrollTo(0, Position(volgendeStap) - 100);

}

function getPrijs(type, maand){
    let index = "";
    switch (maand){
        case 3:
            index = 0;
            break;
        case 6:
            index = 1;
            break;
        case 12:
            index = 2;
            break;
    }

    if(type.toLowerCase() === "basic"){
        return basicPrijs[index];
    } else if (type.toLowerCase() === "full"){
        return fullPrijs[index];
    } else if (type.toLowerCase() === "pro"){
        return fullPrijs[index];
    } else{
        return null;
    }
}

function laadBetaling(type, maand){
    gekozenMaand = maand;
    console.log("type: " + " maand: " + maand);
    let pakketTitel = document.getElementById("pakket_betaling");
    pakketTitel.textContent = type.toUpperCase();

    let pakketMaanden = document.getElementById("pakket_betaling_maanden");
    pakketMaanden.textContent = maand;

    let prijs = getPrijs(type, maand);
    let totaalPrijs = maand * prijs;
    let totaal = maand + " x €" + prijs + " =";
    let totaalSpan = document.getElementById("pakket_betaling_totaal");
    let totaalGroot = document.getElementById("pakket_betaling_totaal_groot");
    totaalSpan.textContent = totaal;
    totaalGroot.textContent = "€" + totaalPrijs;

    gekozenTotaalPrijs = totaalPrijs;

    document.getElementById("pakketten__betaling").style.display = "block";
    document.getElementById("paketten__volgendeStap").style.display = "none";
    document.getElementById("pakketten__aanbod").style.display = "none";
    window.scrollTo(0, Position(document.getElementById("pakketten__betaling")) - 150);
}

function betalingswijze(betaling){
    let betalingswijzes = document.getElementById("betalingswijze").children;
    for(let i = 0; i < betalingswijzes.length; i++){
        betalingswijzes[i].style.transform = "scale(1)";
        betalingswijzes[i].style.backgroundColor = "transparent";

    }
    let selected = document.getElementById("svg_" + betaling);
    selected.style.transform = "scale(1.05)";
    selected.style.backgroundColor = "#97CAD0";

    gekozenBetaling = betaling;
}

function returnPakketten(){
    document.getElementById("pakketten__betaling").style.display = "none";
    document.getElementById("paketten__volgendeStap").style.display = "block";
    document.getElementById("pakketten__aanbod").style.display = "block";
}

function vervoledigBetaling(){
    let email = document.getElementById("pakketten__checkout__email").value;

    if(email == "" || gekozenBetaling == ""){
        let errorMess = "Vul alle velden in aub";
        document.getElementById("errorMess").style.display = "block";
        document.getElementById("errorMess").innerText = errorMess;
        document.getElementById("pakketten__checkout__email").style.borderColor = "red";
        document.getElementById("betalingswijze").style.border = "1px solid red";
        document.getElementById("betalingswijze").style.borderColor = "red";
        document.getElementById("betalingswijze").style.borderRadius = "10px";
        document.getElementById("betalingswijze").style.padding = "0.5rem";

    } else{
        let hoofdtitel = document.getElementById("pakketten__hoofdtitel");
        let checkmark = document.createElement("img");
        checkmark.src = "assets/checkmark.png";
        checkmark.alt = "groene checkmark";
        checkmark.style.width = "4rem";

        hoofdtitel.innerHTML = "Bedankt! ";
        hoofdtitel.appendChild(checkmark);

        document.getElementById("pakketten__betaling").style.display = "none";
        document.getElementById("pakketten__confirmatie").style.display = "block";

        document.getElementById("confirmatie__pakket").innerText = gekozenPakket.toUpperCase() + " PAKKET voor " + gekozenMaand + " maanden";
        document.getElementById("confirmatie__prijs").innerText = "€" + gekozenTotaalPrijs;
        document.getElementById("confirmatie_mail").innerText = email;
        document.getElementById("confirmatie_mail").style.fontWeight = "bold";
        document.getElementById("confirmatie_betaling").innerText = gekozenBetaling;
        document.getElementById("confirmatie_betaling").style.fontWeight = "bold";


        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
}

basic.addEventListener("click", () => laadVolgendeStap("basic"));
pro.addEventListener("click", () => laadVolgendeStap("pro"));
full.addEventListener("click", () => laadVolgendeStap("full"));

let maand3 = document.getElementById("3maand");
let maand6 = document.getElementById("6maand");
let maand12 = document.getElementById("12maand");

maand3.addEventListener("click", () => laadBetaling(gekozenPakket, 3));
maand6.addEventListener("click", () => laadBetaling(gekozenPakket, 6));
maand12.addEventListener("click", () => laadBetaling(gekozenPakket, 12));

let paypal = document.getElementById("svg_paypal");
let visa = document.getElementById("svg_visa");
let mastercard = document.getElementById("svg_mastercard");

paypal.addEventListener("click", () => betalingswijze("paypal"))
visa.addEventListener("click", () => betalingswijze("visa"))
mastercard.addEventListener("click", () => betalingswijze("mastercard"))

document.getElementById("pakketten__betaling_terug").addEventListener("click", () => returnPakketten());
document.getElementById("pakketten__betaling_einde").addEventListener("click", () => vervoledigBetaling());

