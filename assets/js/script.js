//var & set up generator
var copyEl = document.getElementById('copy');
var passEl = document.getElementById('password');
var lengthEl = document.getElementById('slide');
var upperEl = document.getElementById('upperCase');
var lowerEl = document.getElementById('lowerCase');
var numsEl = document.getElementById('numbers');
var symsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');

//var sliding bar
var slide = document.getElementById("slide");
var output = document.getElementById("charValue");
output.innerHTML = slide.value;

//var set ups random chraacter generators
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "0123456789";
var symbols = "!@#$%^&*";
var lower = lowercase.split("");
var upper = uppercase.split("");
var nums = numbers.split("");
var syms = symbols.split("");
//console.log(lower);
//console.log(upper);
//console.log(nums);
//console.log(syms);

//RANDOM GENERATOR FUNCTION ARRAYS

var randCharSelection = [];
var newPassword = [];

//PASSWORD GENERATOR

//SLIDING BAR

slide.oninput = function () {
    output.innerHTML = this.value;
};

//event functions
//function copyToClip() {
//
//}

function passwordSelections() {
    var charLength = parseInt(lengthEl.value);
    var inclUpper = upperEl.checked;
    var inclLower = lowerEl.checked;
    var inclNums = numsEl.checked;
    var inclSyms = symsEl.checked;
    randCharSelection.length = 0;
    if (charLength < 8 || charLength > 128) {
        alert("Your password does not meet length criteria!");
        return;
    }
    if (inclUpper === false && inclLower === false &&
        inclNums === false && inclSyms === false) {
        alert("You must select at least one character option!");
        return;
    }
    if (inclUpper === true) {
        randCharSelection.push(function () { randUpper() });
        return;
    }
    if (inclLower === true) {
        randCharSelection.push(function () { randLower() });
        return;
    }

    if (inclNums === true) {
        randCharSelection.push(function () { randNum() });
        return;
    }

    if (inclSyms === true) {
        randCharSelection.push(function () { randSym() });
        return;
    }
    console.log(randCharSelection);

}

function generatePassword() {
    passwordSelections();
    for (i = 0; i < parseInt(lengthEl.value); i++) {
        newPassword.push(randCharSelection[Math.floor(Math.random() * randCharSelection.length - 1)]);
    }
    console.log(newPassword);
}



function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log(lengthEl);
}

//event listeners
generateEl.addEventListener('click', writePassword());
//copyEl.addEventListener('click',);

//RANDOM CHARACTER FUNCTIONS
function randLower() {
    return lower[Math.floor(Math.random() * lower.length - 1)];
};
function randUpper() {
    return upper[Math.floor(Math.random() * upper.length - 1)];
};

function randNum() {
    return nums[Math.floor(Math.random() * nums.length - 1)];
};

function randSym() {
    return syms[Math.floor(Math.random() * sym.length - 1)];
};
//console.log(randUpper());
//console.log(randLower());
//console.log(randNum());
//console.log(randSym());
