// Prompt the user for their age
var age;

age = prompt("Please enter your age:");

if (age >= 65) {
  message = "Free Friday Coffee Night for Seniors!";
  document.getElementById('verify').style.fontSize = 'large';
  document.getElementById('verify').style.color = 'green';
} else {
  message = "Enjoy Music and Make Memories!";
}

// Display the message in the paragraph with ID 'verify'
document.getElementById("verify").innerHTML = message;


// var age;

// age = prompt("Enter your age:")
// if (age >= 65) {
//     output = "Free Friday Coffee Night for Seniors!" 
//     document.getElementById('verify').style.color = 'maroon';
//     document.getElementById('verify').style.fontVariantCaps = 'small-caps';
// } else {
//     output = "Enjoy Music and Make Memories!"
// }

// document.getElementById("verify").innerHTML = output;