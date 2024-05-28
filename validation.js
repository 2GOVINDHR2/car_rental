function registerUser() {
    // Retrieve values entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    // Client-side form validation
    if (username.trim() === '') {
        alert("Please enter a username.");
        return;
    }
    if (password.trim() === '') {
        alert("Please enter a password.");
        return;
    }


    // Create an object to hold user data
    var userData = {
        username: username,
        password: password,
        
    };

    // Retrieve existing registered users or initialize an empty array
    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Add the new user data to the array
    registeredUsers.push(userData);

    // Save the updated array back to localStorage
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    // Notify user about successful registration
    alert("Registration successful. You can now login.");

    // Redirect to login page
    window.location.href = "login.html";
}
// Function to validate login credentials
function Validate() {
    var username = document.forms['jagkform']['username'].value;
    var password = document.forms['jagkform']['password'].value;

    // Check if username and password are correct
    if (checkCredentials(username, password)) {
        alert("Login successful. Redirecting...");
            
        window.history.pushState({}, "", "typecarselect.html"); // Govind add here/

        return true;
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}

// Function to check if username and password match registered users' credentials
function checkCredentials(username, password) {
    // List of registered users
    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Check if the provided username and password match any registered user
    for (var i = 0; i < registeredUsers.length; i++) {
        if (registeredUsers[i].username === username && registeredUsers[i].password === password) {
            return true; // Match found
        }
    }

    return false; // No match found
}
