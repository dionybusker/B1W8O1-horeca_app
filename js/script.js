// script

var linebreak = "<br>";

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;
var aantalSchaalKlein = 0;
var aantalSchaalGroot = 0;

const PRICE_FRIS = 2.00;
const PRICE_BIER = 2.50;
const PRICE_WIJN = 3.00;
const PRICE_SCHAALKLEIN = 3.00;
const PRICE_SCHAALGROOT = 5.00;

function addOrder() {
    // de vraag welke bestelling de klant wilt doen, wordt gesteld 
    var question = "Welke bestelling wilt u toevoegen?";
    var options = "U kunt kiezen uit fris, bier, wijn of een snack.";
    var quit = "Als u de rekening wilt hebben, vul dan 'stop' in.";
    
    this.text = prompt(question + "\n" + options + "\n" + quit);

    if (this.text.toLowerCase() == "fris" || this.text.toLowerCase() == "bier" || this.text.toLowerCase() == "wijn") {
        orderDrinks();
    } else if (this.text.toLowerCase() == "snack") {
        orderSnacks();
    } else if (this.text.toLowerCase() == "stop") {
        calcPrice();
    } else {
        alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
        addOrder();
    }
}

addOrder();

function orderDrinks() {
    // de bestellingen voor het drinken wordt gedaan
    var nan = "Gelieve een nummer in te voeren.";

    var drinks = parseInt(prompt(`Hoeveel ${this.text.toLowerCase()} wilt u toevoegen aan uw bestelling?`));
    if (Number.isNaN(drinks)) {
        alert(nan);
        orderDrinks();
    } else {
        if (this.text.toLowerCase() == "fris") {
            aantalFris = aantalFris + drinks;
            addOrder();
        } else if (this.text.toLowerCase() == "bier") {
            aantalBier = aantalBier + drinks;
            addOrder();
        } else if (this.text.toLowerCase() == "wijn") {
            aantalWijn = aantalWijn + drinks;
            addOrder();
        }
    }
}

function orderSnacks() {
    // de bestelling voor de snack wordt gedaan
    var nan = "Gelieve een nummer in te voeren.";

    var snacks = parseInt(prompt("Welke bitterbalschaal wilt u toevoegen aan uw bestelling? \n U kunt kiezen uit 8 of 16 stuks."));
    if (Number.isNaN(snacks)) {
        alert(nan);
        orderSnacks();
    } else if (snacks == 8) {
        var schaalKlein = parseInt(prompt("Hoeveel bitterbalschalen van 8 stuks wilt u toevoegen aan uw bestelling?"));
        if (Number.isNaN(schaalKlein)) {
            alert(nan);
            orderSnacks();
        } else {
            aantalSchaalKlein = aantalSchaalKlein + schaalKlein;
            addOrder();
        }
    } else if (snacks == 16) {
        var schaalGroot = parseInt(prompt("Hoeveel bitterbalschalen van 16 stuks wilt u toevoegen aan uw bestelling?"));
        if (Number.isNaN(schaalGroot)) {
            alert(nan);
            orderSnacks();
        } else {
            aantalSchaalGroot = aantalSchaalGroot + schaalGroot;
            addOrder();
        }
    } else {
        alert("U kunt alleen kiezen uit een schaal van 8 of 16 stuks.");
        orderSnacks();
    }
}

function calcPrice() {
    // de totaalprijzen van de gehele bestelling wordt berekend
    var totalPrice = (aantalFris * PRICE_FRIS) + (aantalBier * PRICE_BIER) + (aantalWijn * PRICE_WIJN) + (aantalSchaalKlein * PRICE_SCHAALKLEIN) + (aantalSchaalGroot * PRICE_SCHAALGROOT);

    if (aantalFris > 0) {
        document.getElementById("order").innerHTML = `Fris ${linebreak}`;
        document.getElementById("amount").innerHTML = aantalFris + linebreak;
        document.getElementById("price").innerHTML = `€ ` + parseFloat(PRICE_FRIS).toFixed(2) + linebreak;
        document.getElementById("total-price").innerHTML = `€ ` + parseFloat(aantalFris * PRICE_FRIS).toFixed(2) + linebreak;
    }
    if (aantalBier > 0) {
        document.getElementById("order").innerHTML += `Bier ${linebreak}`;
        document.getElementById("amount").innerHTML += aantalBier + linebreak;
        document.getElementById("price").innerHTML += `€ ` + parseFloat(PRICE_BIER).toFixed(2) + linebreak;
        document.getElementById("total-price").innerHTML += `€ ` + parseFloat(aantalBier * PRICE_BIER).toFixed(2) + linebreak;
    }
    if (aantalWijn > 0) {
        document.getElementById("order").innerHTML += `Wijn ${linebreak}`;
        document.getElementById("amount").innerHTML += aantalWijn + linebreak;
        document.getElementById("price").innerHTML += `€ ` + parseFloat(PRICE_WIJN).toFixed(2) + linebreak;
        document.getElementById("total-price").innerHTML += `€ ` + parseFloat(aantalWijn * PRICE_WIJN).toFixed(2) + linebreak;
    }
    if (aantalSchaalKlein > 0) {
        document.getElementById("order").innerHTML += `Bitterballen 8 st. ${linebreak}`;
        document.getElementById("amount").innerHTML += aantalSchaalKlein + linebreak;
        document.getElementById("price").innerHTML += `€ ` + parseFloat(PRICE_SCHAALKLEIN).toFixed(2) + linebreak;
        document.getElementById("total-price").innerHTML += `€ ` + parseFloat(aantalSchaalKlein * PRICE_SCHAALKLEIN).toFixed(2) + linebreak;
    }
    if (aantalSchaalGroot > 0) {
        document.getElementById("order").innerHTML += `Bitterballen 16 st. ${linebreak}`;
        document.getElementById("amount").innerHTML += aantalSchaalGroot + linebreak;
        document.getElementById("price").innerHTML += `€ ` + parseFloat(PRICE_SCHAALGROOT).toFixed(2) + linebreak;
        document.getElementById("total-price").innerHTML += `€ ` + parseFloat(aantalSchaalGroot * PRICE_SCHAALGROOT).toFixed(2) + linebreak;
    }

    document.getElementById("to-pay").innerHTML = `<strong> € ` + parseFloat(totalPrice).toFixed(2) + `</strong>`;
}

function showBill() {
    // de rekening wordt geprint naar het scherm
    if (aantalFris > 0) {
        calcPrice();
    }
    if (aantalBier > 0) {
        calcPrice();
    }
    if (aantalWijn > 0) {
        calcPrice();
    }
    if (aantalSchaalKlein > 0) {
        calcPrice();
    }
    if (aantalSchaalGroot > 0) {
        calcPrice();
    }
}