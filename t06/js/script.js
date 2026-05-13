let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");

if (firstName === "" || lastName === "" || !isNaN(firstName) || !isNaN(lastName)) {
    alert("Wrong input!");
    console.log("Wrong input!");
} else {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    
    fullName = firstName + " " + lastName;
alert("Your full name is: " + fullName);
console.log("Your full name is: " + fullName);
}
