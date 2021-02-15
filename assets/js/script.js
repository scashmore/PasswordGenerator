//var & set up generator
var copyEl = document.getElementById('copy');
var passEl = document.getElementById('password');
var lengthEl = document.getElementById('slide');
var upperEl = document.getElementById('checkU');
var lowerEl = document.getElementById('checkL');
var numsEl = document.getElementById('checkN');
var symsEl = document.getElementById('checkS');
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
var checkCount = 0;
var countValid = [];
//console.log(lower);
//console.log(upper);
//console.log(nums);
//console.log(syms);

//RANDOM GENERATOR FUNCTION ARRAYS

// var randCharSelection = [];
// var newPassword = [];

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
    var randCharSelection = []
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
        randCharSelection.push(upper);
        countValid.push(upper[Math.floor(Math.random() * upper.length)]);
        checkCount++
    }
    if (inclLower === true) {
        randCharSelection.push(lower);
        countValid.push(lower[Math.floor(Math.random() * lower.length)]);
        checkCount++
    }

    if (inclNums === true) {
        randCharSelection.push(nums);
        countValid.push(nums[Math.floor(Math.random() * nums.length)]);
        checkCount++
    }

    if (inclSyms === true) {
        randCharSelection.push(syms);
        countValid.push(syms[Math.floor(Math.random() * syms.length - 1)]);
        checkCount++
    }
    return randCharSelection;
    console.log(randCharSelection);

}

function generatePassword() {
    var passwordSelectionsArr = passwordSelections();
    console.log(passwordSelectionsArr);
    var partPassword = [];
    for (i = 0; i < parseInt(lengthEl.value) - checkCount; i++) {
        var num = Math.floor(Math.random() * (passwordSelectionsArr.length));
        var placeHolder = passwordSelectionsArr[num];
        console.log(placeHolder)
        var charcter = placeHolder[Math.floor(Math.random() * placeHolder.length)];
        partPassword.push(charcter);
    }
    var newPassword = partPassword.concat(countValid);
    console.log(newPassword);

    return newPassword.join('');
}



function writePassword() {
    checkCount = 0;
    countValid.length = 0;
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
    passwordText.value = password;
}

//event listeners
generateEl.addEventListener('click', writePassword);
    //copyEl.addEventListener('click',);

    //RANDOM CHARACTER FUNCTIONS
/*     function randLower() {
        return lower[Math.floor(Math.random() * lower.length)];
    };
    function randUpper() {
        return upper[Math.floor(Math.random() * upper.length)];
    };

    function randNum() {
        return nums[Math.floor(Math.random() * nums.length)];
    };

    function randSym() {
        return syms[Math.floor(Math.random() * sym.length - 1)];
    }; */
//console.log(randUpper());
//console.log(randLower());
//console.log(randNum());
//console.log(randSym());
