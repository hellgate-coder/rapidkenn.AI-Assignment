// Browser Storage Key
const STORAGE_KEY = "employees";

// Utility Functions
const getEmployees = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
const saveEmployees = (employees) => localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));

// Add Employee
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const employee = {
        name: document.getElementById("name").value,
        position: document.getElementById("position").value,
        about: document.getElementById("about").value,
        joining_date: document.getElementById("joining_date").value,
    };

    const employees = getEmployees();
    employees.push(employee);
    saveEmployees(employees);

    alert("Employee registered successfully!");
    window.location.hash = "#list";
    loadEmployees();
});

// Load Employees
function loadEmployees() {
    const employees = getEmployees();
    const tableBody = document.getElementById("employee-table");
    tableBody.innerHTML = "";

    employees.forEach((employee, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${"  "+employee.name}</td>
            <td>${"  "+employee.position}</td>
            <td>${"  "+employee.about}</td>
            <td>${"  "+employee.joining_date}</td>
            <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Delete Employee
function deleteEmployee(index) {
    const employees = getEmployees();
    employees.splice(index, 1);
    saveEmployees(employees);
    loadEmployees();
}

// Search Employee
function searchEmployee() {
    const query = document.getElementById("search").value.toLowerCase();
    const employees = getEmployees();
    const filtered = employees.filter((emp) => emp.name.toLowerCase().includes(query));
    // Update the table with filtered employees
}

// Toggle Menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
}
