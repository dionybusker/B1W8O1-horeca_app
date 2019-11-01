// script

function showBill() { // de rekening wordt getoond
    // code
}

function addOrder() { // bestellingen worden toegevoegd
    // code
    var order = "Welke bestelling wilt u toevoegen?";
    var options = "U kunt kiezen uit fris, bier of wijn.";
    var quit = "Als u de rekening wilt hebben, vul dan 'stop' in.";
    var question = prompt(order + "\n" + options + "\n" + quit);
    if (question == "fris") {
        prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
    } else if (question == "bier") {
        prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
    } else if (question == "wijn") {
        prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?");
    } else {
        alert("Sorry, maar dat hebben wij niet. U kunt alleen kiezen uit fris, bier of wijn.");
    }
    addOrder();
}

function calcPrice() { // prijzen worden uitgerekend
    // code
}

addOrder();