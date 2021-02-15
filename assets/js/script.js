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
console.log(lower);
console.log(upper);
console.log(nums);
console.log(syms);

//random gen functions
function randLower() {
    var i = Math.floor(Math.random() * lower.length - 1);
    return lower[i];
}
function randUpper() {
    var i = Math.floor(Math.random() * upper.length - 1);
    return upper[i];
};

function randnum() {
    var i = Math.floor(Math.random() * nums.length - 1);
    return nums[i];
};

function randsym() {
    var i = Math.floor(Math.random() * sym.length - 1);
    return syms[i];
};

//SLIDER
var slide = document.getElementById("slide");
var output = document.getElementById("charValue");
output.innerHTML = slide.value;

slide.input = function() {
    output.innerHTML = this.value;
};