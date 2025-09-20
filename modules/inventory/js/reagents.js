const reagents = [
  { name: "Sodium Hydroxide", quantity: "500ml", status: "Available" },
  { name: "Phenolphthalein", quantity: "200ml", status: "Low Stock" },
  { name: "Sulfuric Acid", quantity: "0ml", status: "Out of Stock" }
];

const table = document.getElementById("reagentTable");

reagents.forEach(r => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${r.name}</td>
    <td>${r.quantity}</td>
    <td>${r.status}</td>
  `;
  table.appendChild(row);
});
