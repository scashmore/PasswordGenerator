//PASSWORD BOX

//var & set up
var copyEl = document.getElementById('copy');
var passEl = document.getElementById('password');
var lengthEl = document.getElementById('length');
var upperEl = document.getElementById('upperCase');
var lowerEl = document.getElementById('lowerCase');
var numsEl = document.getElementById('numbers');
var symsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');

//event functions
//function copyToClip() {
//
//}

console.log(lengthEl.value);
function randGenerator() {
    //lengthEl is currently undefined. How do I fix this?
    var charLength = +lengthEl.value
    var inclUpper = upperEl.checked;
    var inclLower = lowerEl.checked;
    var inclNums = numsEl.checked;
    var inclSyms = symswEl.checked;
}

//event listeners
//generateEl.addEventListener('click', randGenerator());
//copyEl.addEventListener('click',);

//GENERATOR

//var set ups
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

//random gen functions
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

//SLIDER **COME BACK NOT FUCTIONING!**
//var slide = document.getElementById("slide");
//var output = document.getElementById("charValue");
//output.innerHTML = slide.value;

//slide.input = function() {
//    output.innerHTML = this.value;
//};