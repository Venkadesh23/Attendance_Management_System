
function showSection(sectionId) {
    document.getElementById('viewAttendance').style.display = 'none';
    document.getElementById('applyLeave').style.display = 'none';

    document.getElementById(sectionId).style.display = 'block';
  }

  function submitLeaveRequest() {
    const startDate = document.getElementById('leaveStart').value;
    const endDate = document.getElementById('leaveEnd').value;
    const reason = document.getElementById('leaveReason').value;

    if (!startDate || !endDate || !reason) {
      alert('Please fill all fields before submitting!');
      return;
    }

    //sending the leave request to the server
    alert(`Leave Request Submitted:\nStart Date: ${startDate}\nEnd Date: ${endDate}\nReason: ${reason}`);

    // Reset the form after submission
    document.getElementById('leaveForm').reset();
  }
 