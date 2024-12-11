
// Switching between Admin and Employee forms
const formWrapper = document.getElementById('formWrapper');
const slider = document.getElementById('slider');

// document.designMode='on';

function AdminLogin() {
  formWrapper.style.transform = 'translateX(0)';
  slider.style.left = '0';
}

function EmployeeLogin() {
  formWrapper.style.transform = 'translateX(-50%)';
  slider.style.left = '50%';
}

document.getElementById('adminForm').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    validateAdmin();
  }
});

document.getElementById('employeeForm').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    validateEmployee();
  }
});

// Admin login validation
function validateAdmin() {
  const adminUser1 = "ADMIN_A";
  const adminUser2 = "ADMIN_B";
  const adminPass1 = "PASS_A";
  const adminPass2 = "PASS_B";

  const checkAdminName = document.getElementById("adminUsername").value;
  const checkAdminPass = document.getElementById("adminPassword").value;

  if ((checkAdminName == adminUser1 && checkAdminPass == adminPass1)||(checkAdminName == adminUser2 && checkAdminPass == adminPass2)) {
    window.location.href = "Admin.html";
  } else {
    alert("Invalid username or password!");

  }
}

// Employee login validation
function validateEmployee() {
  let empName = ["Dharmar", "Manibalaji", "Karthick", "Venkadesh", "Vigneshwaran"];
  let empPass = ["DHARMA", "MANI", "KARTHI", "VENKY", "VICKY"];

  const checkEmpName = document.getElementById("employeeUsername").value;
  const checkEmpPass = document.getElementById("employeePassword").value;
  let isValid = false;

  for (let index = 0; index < empName.length; index++) {
    if (empName[index] === checkEmpName && empPass[index] === checkEmpPass) {
      isValid = true;
      break; 
    }
  }
  if (isValid) {
    window.location.href = "Employee.html"; 
  } else {
    alert("Invalid username or password!"); 
  }
}