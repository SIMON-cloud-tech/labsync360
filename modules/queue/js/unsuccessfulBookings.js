const failed = [
  { group: "BSC Biotech", reason: "Time slot conflict", time: "12:00 PM", date: "2025-09-18" },
  { group: "SIC Chemistry", reason: "Technician unavailable", time: "3:00 PM", date: "2025-09-17" }
];

const table = document.getElementById("failTable");

failed.forEach(f => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${f.group}</td>
    <td>${f.reason}</td>
    <td>${f.time}</td>
    <td>${f.date}</td>
  `;
  table.appendChild(row);
});
