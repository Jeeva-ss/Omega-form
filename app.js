const form = document.getElementById("form");
const emailValue = document.getElementById("email");
const password = document.getElementById("password");
const messageContainer = document.getElementById("message-container");
const message = document.getElementById("message");

let isValid = false;

validateForm = () => {
	// Check validity
	isValid = form.checkValidity();
	!isValid
		? (message.textContent = "Please fill out all fields")
		: (message.textContent = "Successfully signed in!");
};

// Store in console
storeData = () => {
	const details = {
		email: form.email.value,
		password: form.password.value,
	};
	console.log(details);
};

// Process form
processForm = (e) => {
	e.preventDefault();
	//   Validate form
	validateForm();
	isValid ? storeData() : "";
	form.email.value = "";
	form.password.value = "";
};

// Event listener
form.addEventListener("submit", processForm);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.map((x) => {
// 	if (x % 2 === 0) {
// 		console.log(x);
// 	}
// });
