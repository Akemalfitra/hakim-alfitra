"use strict";

// DOM Elements
const registrationForm = document.getElementById("registrationForm");
const inputNama = document.getElementById("nama");
const inputPassword = document.getElementById("password");
const warningText = document.getElementById("warningText");

// Simulate account storage
let accounts = [];

// Function to create a username from the full name (first name and last name)
const createUsername = function (nama) {
  return nama.split(' ').map(name => name[0].toLowerCase()).join(''); // Creates username from initials
};

// Handle registration form submission
registrationForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Get user input values
  const nama = inputNama.value.trim();
  const password = inputPassword.value.trim();

  // Validation
  if (!nama || !password) {
    warningText.textContent = "Semua kolom wajib diisi!";
    warningText.style.display = "block";
    return;
  }

  // Check if the username already exists
  const username = createUsername(nama);
  const existingAccount = accounts.find(acc => acc.username === username);
  if (existingAccount) {
    warningText.textContent = "Username sudah terdaftar, coba yang lain!";
    warningText.style.display = "block";
    return;
  }

  // Create the new account
  const newAccount = {
    username: username,
    nama: nama,
    password: password, // In a production environment, use hashing for security
  };

  // Add the account to the accounts array
  accounts.push(newAccount);

  // Clear form fields
  inputNama.value = inputPassword.value = "";

  // Display success message
  alert("Registrasi berhasil! Silakan login.");

  // Optionally, redirect to the login page or show a login form
 window.location.href = "../login/login.html"; // Uncomment this line to redirect to login page
});
