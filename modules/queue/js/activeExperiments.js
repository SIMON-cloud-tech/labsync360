const active = [
  { group: "BSC Chemistry", technician: "Dr. Awour", start: "10:00 AM", room: "Lab 2" },
  { group: "SIC Biotech", technician: "Dr. Wanjiku", start: "1:00 PM", room: "Lab 1" }
];

const table = document.getElementById("activeTable");

active.forEach(a => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${a.group}</td>
    <td>${a.technician}</td>
    <td>${a.start}</td>
    <td>${a.room}</td>
  `;
  table.appendChild(row);
});
