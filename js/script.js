// script

var linebreak = "<br>";

var valid = true;

// const FRIS_PRICE = 2;
// const BIER_PRICE = 2.5;
// const WIJN_PRICE = 3;
// var totalPrice;

function addOrder() { // bestellingen worden toegevoegd
    var order = "Welke bestelling wilt u toevoegen?";
    var options = "U kunt kiezen uit fris, bier of wijn.";
    var quit = "Als u de rekening wilt hebben, vul dan 'stop' in.";
    var nan = "Gelieve een nummer in te voeren.";
    
    var question = prompt(order + "\n" + options + "\n" + quit);

    if (question == "fris" || question == "bier" || question == "wijn") {
        valid = false;
        while (!valid) {
            var total = parseInt(prompt("Hoeveel " + question + " wilt u toevoegen aan uw bestelling?"));
            if (Number.isNaN(total)) {
                alert(nan);
            } else {
                valid = true;
            }
        }
    } else if (question == "stop") {
        return false;
    } else {
        alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
    }
    document.write("Dit is uw bestelling: " + total + "× " + question + linebreak);

    addOrder();
}

function showBill() { // de rekening wordt getoond
    // code
    document.write("Dit is uw bestelling: " + total + "× " + question + linebreak);

}

function calcPrice() { // prijzen worden uitgerekend
    // code
}

addOrder();
// showBill();