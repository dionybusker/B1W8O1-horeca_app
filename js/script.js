// script

var linebreak = "<br>";

function addOrder() { // bestellingen worden toegevoegd
    // code
    var order = "Welke bestelling wilt u toevoegen?";
    var options = "U kunt kiezen uit fris, bier of wijn.";
    var quit = "Als u de rekening wilt hebben, vul dan 'stop' in.";
    var question = prompt(order + "\n" + options + "\n" + quit);

    if (question == "fris") {
        var total = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
    } else if (question == "bier") {
        var total = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
    } else if (question == "wijn") {
        var total = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?");
    } else if (question == "stop") {
        return false;
    } else {
        alert("Sorry, maar dat hebben wij niet. U kunt alleen kiezen uit fris, bier of wijn.");
    }
    document.write("Dit is uw bestelling: " + total + "× " + question + linebreak);

    addOrder();
}

function showBill() { // de rekening wordt getoond
    // code
}

function calcPrice() { // prijzen worden uitgerekend
    // code
}

addOrder();