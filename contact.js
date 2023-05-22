let naamInput = document.getElementById("naam");
let emailInput = document.getElementById("email");
let berichtInput = document.getElementById("text");
let akkoordInput = document.getElementById("akkoord");
let submit = document.getElementById("akkoord__submit");

function veranderKleur(input){
    input.style.borderColor = "red";
}

function confirmatie(){
    let naam = naamInput.value;
    let email = emailInput.value;
    let bericht = berichtInput.value;
    let akkoord = akkoordInput.checked;
    let error = false;

    if(naam == "" || email == "" || bericht == "" || akkoord == false) {
        veranderKleur(naamInput);
        veranderKleur(emailInput);
        veranderKleur(berichtInput);
        veranderKleur(akkoordInput);
        error = true;
    } else{
        error = false;
    }
    if(error == true){
        document.getElementById("errorMessOverOns").style.display = "block";
        document.getElementById("errorMessOverOns").innerText = "Gelieve alle velden in te vullen";
    } else{
        document.getElementById("formulier_id").style.display = "none";
        document.getElementById("titel-formulier_h1").innerHTML = "Bedankt voor je berichtje!<br>U hoort snel van ons!"
        let checkmark = document.createElement("img");
        checkmark.src = "assets/checkmark.png";
        checkmark.alt = "groene checkmark";
        checkmark.style.width = "4rem";

        document.getElementById("titel-formulier").appendChild(checkmark);
    }

}

submit.addEventListener("click", () => confirmatie());