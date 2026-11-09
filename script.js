// Welcome message

console.log("Welcome to jamduapagi.");

// Display current year automatically

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        `© ${new Date().getFullYear()} jamduapagi. All rights reserved.`;
}
