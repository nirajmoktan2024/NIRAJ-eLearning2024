// auth.js - Authentication System
const users = [
  {
    email: "admin@example.com",
    password: "admin123",
    role: "admin"
  },
  {
    email: "student@example.com",
    password: "student123",
    role: "student"
  }
];

function login(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  }
  return false;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'login.html';
}

// For debugging
console.log("Auth module loaded");
