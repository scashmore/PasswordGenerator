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
    return lower[Math.floor(Math.random() * lower.length - 1];
}
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