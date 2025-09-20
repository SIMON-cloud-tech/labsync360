const bookings = [
  {
    date: "2025-09-18",
    group: "BSC Chemistry 3rd Year",
    technician: "Dr. Awour",
    time: "10:00 AM",
    status: "Completed"
  },
  {
     date: "2025-09-17",
    group: "SIC Industrial Chemistry",
    technician: "Mr. Otieno",
    time: "2:00 PM",
    status: "Cancelled"
  },
  {
    date: "2025-09-16",
    group: "BSC Biotech 2nd Year",
    technician: "Dr. Wanjiku",
    time: "11:30 AM",
    status: "Completed"
  }
];
const table = document.getElementById("bookingTable");

bookings.forEach(booking => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td data-label="Date">${booking.date}</td>
    <td data-label="Group">${booking.group}</td>
    <td data-label="Technician">${booking.technician}</td>
    <td data-label="Time">${booking.time}</td>
    <td data-label="Status">${booking.status}</td>
  `;
  table.appendChild(row);
});
