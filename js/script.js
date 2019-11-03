// script

var linebreak = "<br>";

var valid = true;

const PRICE_FRIS = 2;
const PRICE_BIER = 2.5;
const PRICE_WIJN = 3;
// var totalPrice;

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;

function addOrder() { // bestellingen worden toegevoegd
    var question = "Welke bestelling wilt u toevoegen?";
    var options = "U kunt kiezen uit fris, bier of wijn.";
    var quit = "Als u de rekening wilt hebben, vul dan 'stop' in.";
    // var nan = "Gelieve een nummer in te voeren.";
    
    this.text = prompt(question + "\n" + options + "\n" + quit);

    if (this.text == "fris" || this.text == "bier" || this.text == "wijn") {
        drinks();
        // valid = false;
        // while (!valid) {
        //     aantalFris = aantalFris + parseInt(prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?"));
        //     if (Number.isNaN(aantalFris)) {
        //         alert(nan);
        //     } else {
        //         alert("Het aantal fris is toegevoegd aan uw bestelling.")
        //         valid = true;
        //     }
        // }
    // } else if (order == "bier") {
    //     valid = false;
    //     while (!valid) {
    //         aantalBier = aantalBier + parseInt(prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?"));
    //         if (Number.isNaN(aantalBier)) {
    //             alert(nan);
    //         } else {
    //             alert("Het aantal bier is toegevoegd aan uw bestelling.")
    //             valid = true;
    //         }
    //     }
    // } else if (order == "wijn") {
    //     valid = false;
    //     while (!valid) {
    //         aantalWijn = aantalWijn + parseInt(prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?"));
    //         if (Number.isNaN(aantalWijn)) {
    //             alert(nan);
    //         } else {
    //             alert("Het aantal wijn is toegevoegd aan uw bestelling.")
    //             valid = true;
    //         }
    //     }
    } else if (this.text == "stop") {
        showBill();
        // return false;
    } else {
        alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
        addOrder();
    }
    // document.write("Dit is uw bestelling: " + total + "× " + order + linebreak);

}

function drinks() {
    // code
    var nan = "Gelieve een nummer in te voeren.";

    drink = parseInt(prompt("Hoeveel " + this.text + " wilt u toevoegen aan uw bestelling?"));
    if (Number.isNaN(drink)) {
        alert(nan);
        drinks();
    } else {
        if (this.text == "fris") {
            aantalFris = aantalFris + drink;
            addOrder();
        } else if (this.text == "bier") {
            aantalBier = aantalBier + drink;
            addOrder();
        } else if (this.text == "wijn") {
            aantalWijn = aantalWijn + drink;
            addOrder();
        }
        alert("Het aantal " + this.text + " is toegevoegd aan uw bestelling.")
    }
}


function showBill() { // de rekening wordt getoond
    // code
    var totalPrice = (aantalFris * PRICE_FRIS) + (aantalBier * PRICE_BIER) + (aantalWijn * PRICE_WIJN);

    if (aantalFris > 0) {
        document.write(`U heeft ${aantalFris} fles(jes) fris besteld. ${linebreak} Een flesje fris kost € ${PRICE_FRIS}. De totaalprijs is € ${aantalFris * PRICE_FRIS}. ${linebreak}`);
    }
    if (aantalBier > 0) {
        document.write(`U heeft ${aantalBier} fles(jes) bier besteld. ${linebreak} Een flesje bier kost € ${PRICE_BIER}. De totaalprijs is € ${aantalBier * PRICE_BIER}. ${linebreak}`);
    }
    if (aantalWijn > 0) {
        document.write(`U heeft ${aantalWijn} glas/glazen wijn besteld. ${linebreak} Een glas wijn kost € ${PRICE_WIJN}. De totaalprijs is € ${aantalWijn * PRICE_WIJN}. ${linebreak}`);
    }

    document.write(`<strong>Uw totaalprijs is: € ${totalPrice}.</strong`);

    // addOrder();
    // document.write("Dit is uw bestelling: " + aantalFris + "× " + order + linebreak);
    // document.write("Dit is uw bestelling: " + aantalBier + "× " + order + linebreak);
    // document.write("Dit is uw bestelling: " + aantalWijn + "× " + order + linebreak);
}

function calcPrice() { // prijzen worden uitgerekend
    // code
}

addOrder();
// showBill();