// prompt how many students learning JS
// need to turn numStudents into an integer
function capitalizeFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}
function runPrompts(type) {
var studentName = prompt("What is the " + type + "'s name? ");
var studentPhoneNo = checkPhoneNumber(type);
var studentCity = prompt("What city does the " + type + " live in?");
return {name: studentName, number: studentPhoneNo, city:studentCity};
}
// create empty array for totalStudents
// collect studentName, studentPhone, studentCity
function gatherData(type) {
var results = [];
var keepGoing = true;
while (keepGoing) {
var result = runPrompts(type);
results.push(result);
keepGoing = confirm("Would you like to continue?");
}
return results;
}
function validatePhoneNumber(studentPhoneNo, type) {
while (studentPhoneNo.length != 12 || studentPhoneNo.charAt(3) != "-" || studentPhoneNo.charAt(7) != "-") {
alert(" Your phone number is not valid, please re-enter your number using the format xxx-xxx-xxxx ");
studentPhoneNo = prompt("What is the " + type + "'s phone number? (xxx-xxx-xxxx)");
}
return studentPhoneNo;
}
function checkPhoneNumber(type) {
var studentPhoneNo = prompt("What is the " + type + "'s phone number? (xxx-xxx-xxxx)");
studentPhoneNo = validatePhoneNumber(studentPhoneNo, type);
return studentPhoneNo;
}
function displayData(results) {
for (var i = 0; i < results.length; i ++) {
alert(" Name: " + capitalizeFirstLetter(results[i].name) + " \n Phone: " + results[i].number + "\n City: " + results[i].city.toUpperCase());
}
}
function promptForInformation(type) {
var results = gatherData(type);
displayData(results);
return results;
}
var students = promptForInformation("student");
var mentors = promptForInformation("mentor");
// console.log(totalStudents);
function insertsDOM (object) {
var list = document.getElementById('data');
var li = document.createElement('li');
var name = document.createTextNode("name: " + object.name + ", phone: " + object.phone);
li.appendChild(name);
list.appendChild(li);
}
function displayDOM (array) {
array.forEach(function(name) {
insertsDOM(name);
});
}
displayDOM(students);