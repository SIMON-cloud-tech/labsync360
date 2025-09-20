const pending = [
  { group: "BSC Chemistry", time: "11:00 AM", technician: "Dr. Wanjiku", status: "Awaiting Approval" },
  { group: "SIC Biotech", time: "1:00 PM", technician: "Mr. Otieno", status: "Queued" }
];

const table = document.getElementById("pendingTable");

pending.forEach(p => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${p.group}</td>
    <td>${p.time}</td>
    <td>${p.technician}</td>
    <td>${p.status}</td>
  `;
  table.appendChild(row);
});
