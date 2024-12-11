
function showSection(sectionId) {
  const sections = ['manageEmployees', 'viewAttendance', 'approveLeave', 'markAttendance'];

  sections.forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

  function addEmployee() {
  const employeeTable = document.getElementById("employeeTable");
  const attendanceTable = document.getElementById("attendanceTable");

  // Create a new row for the Employee table
  const employeeRow = document.createElement("tr");

  // Employee Table Cells
  const empIdCell = document.createElement("td");
  const empIdInput = document.createElement("input");
  empIdInput.type = "text";
  empIdInput.placeholder = "Employee ID";
  empIdCell.appendChild(empIdInput);

  const empNameCell = document.createElement("td");
  const empNameInput = document.createElement("input");
  empNameInput.type = "text";
  empNameInput.placeholder = "Employee Name";
  empNameCell.appendChild(empNameInput);

  const empRoleCell = document.createElement("td");
  const empRoleInput = document.createElement("input");
  empRoleInput.type = "text";
  empRoleInput.placeholder = "Employee Role";
  empRoleCell.appendChild(empRoleInput);

  const actionCell = document.createElement("td");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.className = "btn";
  saveBtn.onclick = () => {
    const empId = empIdInput.value;
    const empName = empNameInput.value;
    const empRole = empRoleInput.value;

    if (!empId || !empName || !empRole) {
      alert("Please fill all fields!");
      return;
    }

    // Update Employee Table Row
    empIdCell.textContent = empId;
    empNameCell.textContent = empName;
    empRoleCell.textContent = empRole;
    saveBtn.remove();

    // Add the new row to the Attendance Table
    const attendanceRow = document.createElement("tr");
    const attendanceIdCell = document.createElement("td");
    attendanceIdCell.textContent = empId;
    const attendanceNameCell = document.createElement("td");
    attendanceNameCell.textContent = empName;
    const attendanceMonthCell = document.createElement("td");
    attendanceMonthCell.textContent = "September";
    const attendancePercentageCell = document.createElement("td");
    attendancePercentageCell.textContent = "92%";

    attendanceRow.appendChild(attendanceIdCell);
    attendanceRow.appendChild(attendanceNameCell);
    attendanceRow.appendChild(attendanceMonthCell);
    attendanceRow.appendChild(attendancePercentageCell);

    attendanceTable.appendChild(attendanceRow);
  };

  actionCell.appendChild(saveBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn";
  deleteBtn.onclick = () => employeeRow.remove();
  actionCell.appendChild(deleteBtn);

  employeeRow.appendChild(empIdCell);
  employeeRow.appendChild(empNameCell);
  employeeRow.appendChild(empRoleCell);
  employeeRow.appendChild(actionCell);

  employeeTable.appendChild(employeeRow);
}


  // function editEmployee(empId) {
  //   alert("Edit Employee functionality for Employee ID " + empId + " not yet implemented!");
  // }

  function deleteEmployee(button) {
    const Employeetablerow = button.parentElement.parentElement;
    if (confirm("Are you sure you want to delete this employee?")) {
      Employeetablerow.remove();
    }
  }

  function searchAttendance() {
    alert("Search Attendance functionality not yet implemented!");
  }

  function approveLeave(empId) {
    alert("Leave approved for Employee ID " + empId);
    }

  function rejectLeave(empId) {
    alert("Leave rejected for Employee ID " + empId);
  }

  function markAttendance(status) {
    const employeeSelect = document.getElementById('employeeSelect');
    const employeeName = employeeSelect.value;

    if (!employeeName) {
      alert('Please select an employee.');
      return;
    }

    const currentDate = new Date().toLocaleDateString();
    const attendanceTableBody = document.getElementById('attendanceTableBody');

    const newRow = document.createElement('tr');
    newRow.innerHTML = `  <td>${employeeName}</td> <td>${status}</td> <td>${currentDate}</td>`;
    attendanceTableBody.appendChild(newRow);
    employeeSelect.value = '';
  }
