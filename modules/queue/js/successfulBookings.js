const bookings = [
  { group: "BSC Chemistry", technician: "Dr. Awour", time: "10:00 AM", date: "2025-09-18" },
  { group: "SIC Biotech", technician: "Mr. Otieno", time: "2:00 PM", date: "2025-09-17" }
];

const table = document.getElementById("successTable");

bookings.forEach(b => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${b.group}</td>
    <td>${b.technician}</td>
    <td>${b.time}</td>
    <td>${b.date}</td>
  `;
  table.appendChild(row);
});
