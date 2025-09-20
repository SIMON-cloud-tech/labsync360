const alerts = [
  { item: "Hydrochloric Acid", expires: "2025-09-25" },
  { item: "Microscope Lens Cleaner", expires: "2025-09-22" },
  { item: "Ethanol", expires: "2025-09-20" }
];

const list = document.getElementById("alertList");

alerts.forEach(alert => {
  const li = document.createElement("li");
  li.textContent = `${alert.item} expires on ${alert.expires}`;
  list.appendChild(li);
});
