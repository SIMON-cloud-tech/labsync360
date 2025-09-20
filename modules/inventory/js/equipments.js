const equipments = [
  { name: "Microscope", quantity: 5, availability: "Available" },
  { name: "Burette", quantity: 2, availability: "Limited" },
  { name: "Centrifuge", quantity: 0, availability: "Unavailable" }
];

const table = document.getElementById("equipmentTable");

equipments.forEach(eq => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${eq.name}</td>
    <td>${eq.quantity}</td>
    <td>${eq.availability}</td>
  `;
  table.appendChild(row);
});
