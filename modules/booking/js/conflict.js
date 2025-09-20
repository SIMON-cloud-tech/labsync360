const conflicts = [
  {
    groupA: "SIC Industrial Chemistry",
    groupB: "BSC Chemistry 3rd Year",
    time: "12:00 PM - 2:00 PM",
    type: "Lab Room Overlap"
  },
  {
    groupA: "BSC Biotech 2nd Year",
    groupB: "BSC Chemistry 1st Year",
    time: "10:00 AM - 11:30 AM",
    type: "Technician Double Booking"
  },
  {
    groupA: "SIC Industrial Chemistry",
    groupB: "BSC Biotech 3rd Year",
    time: "2:00 PM - 3:30 PM",
    type: "Equipment Clash"
  }
];
const table = document.getElementById("conflictTable");

conflicts.forEach(conflict => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td data-label="Group A">${conflict.groupA}</td>
    <td data-label="Group B">${conflict.groupB}</td>
    <td data-label="Time Slot">${conflict.time}</td>
    <td data-label="Conflict Type">${conflict.type}</td>
  `;
  table.appendChild(row);
});
