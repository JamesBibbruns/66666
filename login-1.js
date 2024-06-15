// Function to set the username in a cookie
function setUsername() {
    const usernameInput = document.getElementById('usernameInput').value.trim();
    if (usernameInput !== '') {
        setCookie('username', usernameInput, 1); // Set cookie with name "username" lasting 7 days
        alert(`Username "${usernameInput}" has been register.`);
    } else {
        alert('Please enter a valid username.');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    getUsername(); 
});
// Function to retrieve and display the username from the cookie
function getUsername() {
    const username = getCookie('username');
    if (username !== '') {
        document.getElementById('usernameDisplay').textContent = `login-Username: ${username}`;
    } else {
        document.getElementById('someElementId').textContent =' Guest' ;
    }
}

function checkInputs() {
    var usernameInput = document.getElementById('usernameInput').value;
    var passwordInput = document.getElementById('passwordInput').value;

    if (usernameInput !== '' && passwordInput !== '') {
        window.location.href = 'index.html'; // Replace 'index.html' with the path to your index page
    }
}

// Function to set a cookie with a specified name, value, and expiration time
function setCookie(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by its name
function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}
