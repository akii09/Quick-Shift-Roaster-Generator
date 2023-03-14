let shiftRoster = [];

function generateRoster() {
  const numEmployees = document.getElementById("num-employees").value;
  const leavesPerEmployee = document.getElementById("leaves-per-employee").value;
  const startDate = new Date(document.getElementById("start-date").value);
  const numDays = document.getElementById("num-days").value;
  
  if (!numEmployees || !leavesPerEmployee || !startDate || !numDays) {
    alert("Please fill in all fields.");
    return;
  }
  
  shiftRoster = [];
  
  const date = new Date(startDate);
  
  for (let i = 0; i < numDays; i++) {
    const shiftsForDay = [];
    
    for (let j = 0; j < numEmployees; j++) {
      if (shiftsForDay.length >= numEmployees - leavesPerEmployee) {
        break;
      }
      
      shiftsForDay.push(`Employee ${j + 1}`);
    }
    
    shiftRoster.push({
      date: new Date(date),
      shifts: shiftsForDay
    });
    
    date.setDate(date.getDate() + 1);
  }
  
  displayRoster();
}

function displayRoster() {
  const shiftTableBody = document.getElementById("shift-table-body");
  
  shiftTableBody.innerHTML = "";
  
  for (let i = 0; i < shiftRoster.length; i++) {
    const row = document.createElement("tr");
    
    const dateCell = document.createElement("td");
    dateCell.innerText = shiftRoster[i].date.toDateString();
    row.appendChild(dateCell);
    
    const shiftsCell = document.createElement("td");
    shiftsCell.innerText = shiftRoster[i].shifts.join(", ");
    row.appendChild(shiftsCell);
    
    shiftTableBody.appendChild(row);
  }
}
