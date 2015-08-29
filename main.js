// Purpose: to match up students with mentors
// Requirements:
  // Prompt how many students taking JS Class
  // Prompt for student Name, Phone, City
  // Alert answers, formatted for readability
  // Repeat the same for mentors

// Refactor:
  // Instead of prompting for number of students, start with student info
    // and prompt to see if more information will be entered
  // Repeat for mentors

// Bonus:
  // Print results to the DOM instead of alerting the answers
  // Create a form instead of alerting for information - I didn't do this
  // I kept the alerts *and* printed to the DOM



// global variables used throughout
var students = promptForInformation("student");
var mentors = promptForInformation("mentor");

// create function to capitalize the first letter in the name
function capitalizeFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to run Name, Phone, and City prompts
function runPrompts(type) {

  var studentName = prompt("What is the " + type + "'s name? ");

  var studentPhoneNo = checkPhoneNumber(type);

  var studentCity = prompt("What city does the " + type + " live in?");
    return {name: studentName, number: studentPhoneNo, city:studentCity};
}

// function to validate phone number convention
function validatePhoneNumber(studentPhoneNo, type) {
  while (studentPhoneNo.length != 12 || studentPhoneNo.charAt(3) != "-" || studentPhoneNo.charAt(7) != "-") {
    alert(" Your phone number is not valid, please re-enter your number using the format xxx-xxx-xxxx ");
    studentPhoneNo = prompt("What is the " + type + "'s phone number? (xxx-xxx-xxxx)");
  }
    return studentPhoneNo;
}

// function to gather phone number
function checkPhoneNumber(type) {
  var studentPhoneNo = prompt("What is the " + type + "'s phone number? (xxx-xxx-xxxx)");
  studentPhoneNo = validatePhoneNumber(studentPhoneNo, type);
  return studentPhoneNo;
  }

// function to display information in an alert
function displayData(results) {
  for (var i = 0; i < results.length; i ++) {
  alert(" Name: " + capitalizeFirstLetter(results[i].name) + " \n Phone: " + results[i].number + "\n City: " + results[i].city.toUpperCase());
  }
}

// function to gather data
function promptForInformation(type) {
  var results = gatherData(type);
  displayData(results);
  return results;
}

// function to determine if more info will be collected
function gatherData(type) {
  var results = [];
  var keepGoing = true;         // returns true by default
    while (keepGoing) {
    var result = runPrompts(type);
    results.push(result);
    keepGoing = confirm("Would you like to continue?");
  }
return results;
}

// function to collect information to insert on the DOM
function insertsDOM (object) {
  var list = document.getElementById('data');
  var li = document.createElement('li');
  var name = document.createTextNode("NAME: " + object.name + ", PHONE: " + object.number + ", CITY: " + object.city);
  li.appendChild(name);
  list.appendChild(li);
}

// function to display information on the DOM
function displayDOM (array) {
  array.forEach(function(name) {
  insertsDOM(name);
  });
}

// display results on the DOM
displayDOM(students);
displayDOM(mentors);