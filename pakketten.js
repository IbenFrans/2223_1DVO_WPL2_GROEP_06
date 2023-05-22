let gekozenPakket = "";
let gekozenMaand = "";

let basic = document.getElementById("basicPakket");
let pro = document.getElementById("proPakket");
let full = document.getElementById("fullPakket");

let basicPrijs = [15, 14, 13];
let fullPrijs = [20, 19, 18];
let proPrijs = [25, 24, 23];

let maand3 = document.getElementById("prijs_3maand");
let maand6 = document.getElementById("prijs_6maand");
let maand12 = document.getElementById("prijs_12maand");

function laadVolgendeStap(type){
    let pakket = type;
    pakket = pakket.toUpperCase();
    let naam = document.getElementById("pakket_naam");
    naam.textContent = pakket;

    switch (pakket){
        case "BASIC":
            maand3.textContent = basicPrijs[0];
            maand6.textContent = basicPrijs[1];
            maand12.textContent = basicPrijs[2];
            break;
        case "PRO":
            maand3.textContent = proPrijs[0];
            maand6.textContent = proPrijs[1];
            maand12.textContent = proPrijs[2];
            break;
        case "FULL":
            maand3.textContent = fullPrijs[0];
            maand6.textContent = fullPrijs[1];
            maand12.textContent = fullPrijs[2];
            break;
    }

    gekozenPakket = type;
}

function laadBetaling(type, maand){
    gekozenMaand = maand;
    let pakketTitel = document.getElementById("pakket_betaling");
    pakketTitel.textContent = type.toUpperCase();

    // let pakketMaanden = document.getElementById("pakket_betaling_maanden");
    // pakketMaanden.textContent = maand;
}

basic.addEventListener("click", () => laadVolgendeStap("basic"));
pro.addEventListener("click", () => laadVolgendeStap("pro"));
full.addEventListener("click", () => laadVolgendeStap("full"));

maand3.addEventListener("click", () => laadBetaling(gekozenPakket, "12"));
maand6.addEventListener("click", () => laadBetaling());
maand12.addEventListener("click", () => laadBetaling());