function enemy(species) {
    this.species = species;
    this.focus = 0;
    if (this.species == "dog") {
        this.focus = 0;
        this.attack = function () {
            return focus++;
        }
        this.feed = function () {
            return focus--;
        }
    }
}

function btn1() {
    document.getElementById('btn1').style.visibility = 'hidden';
    document.getElementById('btn5').style.visibility = 'visible';
    document.getElementById('btn2').style.visibility = 'hidden';
    document.getElementById('btn3').style.visibility = 'visible';
    document.getElementById('btn4').style.visibility = 'visible';
    document.getElementById('backbtn1').style.visibility = 'visible';
}

function backbtn1() {
    document.getElementById('btn1').style.visibility = 'visible';
    document.getElementById('btn2').style.visibility = 'visible';
    document.getElementById('backbtn1').style.visibility = 'hidden';
    document.getElementById('texttohide').style.visibility = 'hidden';
    document.getElementById('texttohide2').style.visibility = 'hidden';
    document.getElementById('texttohide3').style.visibility = 'hidden';
    document.getElementById('absolute-text1').style.visibility = 'visible';
    document.getElementById('btn3').style.visibility = 'hidden';
    document.getElementById('btn4').style.visibility = 'hidden';
    document.getElementById('btn5').style.visibility = 'hidden';
}

function checkbtn() {
    document.getElementById('btn2').style.visibility = 'hidden';
    document.getElementById('texttohide').style.visibility = 'visible';
    document.getElementById('absolute-text1').style.visibility = 'hidden';
    document.getElementById('btn1').style.visibility = 'hidden';
    document.getElementById('backbtn1').style.visibility = 'visible';
}

function btn3() {
    document.getElementById('btn1').style.visibility = 'hidden';
    document.getElementById('btn2').style.visibility = 'hidden';
    document.getElementById('backbtn1').style.visibility = 'visible';
    document.getElementById('texttohide').style.visibility = 'hidden';
    document.getElementById('texttohide2').style.visibility = 'hidden';
    document.getElementById('texttohide3').style.visibility = 'visible';
    document.getElementById('absolute-text1').style.visibility = 'hidden';
    document.getElementById('btn3').style.visibility = 'hidden';
    document.getElementById('btn4').style.visibility = 'hidden';
    document.getElementById('btn5').style.visibility = 'hidden';
}

function btn4() {
    document.getElementById('btn1').style.visibility = 'hidden';
    document.getElementById('btn2').style.visibility = 'hidden';
    document.getElementById('backbtn1').style.visibility = 'visible';
    document.getElementById('texttohide').style.visibility = 'hidden';
    document.getElementById('texttohide2').style.visibility = 'visible';
    document.getElementById('absolute-text1').style.visibility = 'hidden';
    document.getElementById('btn3').style.visibility = 'hidden';
    document.getElementById('btn4').style.visibility = 'hidden';
    document.getElementById('btn5').style.visibility = 'hidden';
}

function btn5() {
    document.getElementById('btn1').style.visibility = 'hidden';
    document.getElementById('btn2').style.visibility = 'hidden';
    document.getElementById('backbtn1').style.visibility = 'visible';
    document.getElementById('texttohide').style.visibility = 'hidden';
    document.getElementById('texttohide2').style.visibility = 'hidden';
    document.getElementById('texttohide3').style.visibility = 'visible';
    document.getElementById('absolute-text1').style.visibility = 'hidden';
    document.getElementById('btn3').style.visibility = 'hidden';
    document.getElementById('btn4').style.visibility = 'hidden';
    document.getElementById('btn5').style.visibility = 'hidden';
}
