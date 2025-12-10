// REDIRECT TO LOGIN IF NOT AUTHENTICATED
if (localStorage.getItem("adminAuth") !== "true") {
  window.location.href = "/autopilotai/login.html";
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("adminAuth");
  window.location.href = "/autopilotai/login.html";
});

// GLOBAL DATA
let submissions = [];
let filtered = [];
let currentPage = 1;
const pageSize = 10;

// DOM ELEMENTS
const loadingState = document.getElementById("loadingState");
const errorState = document.getElementById("errorState");
const emptyState = document.getElementById("emptyState");
const tableBody = document.getElementById("submissionsBody");


// FETCH SUBMISSIONS
async function loadSubmissions() {
  try {
    const res = await fetch("/.netlify/functions/get-submissions");

    if (!res.ok) {
      const text = await res.text().catch(() => null);
      throw new Error(`Function returned ${res.status} ${text ? " - " + text : ""}`);
    }

    const json = await res.json();

    loadingState.classList.add("hidden");

    if (!json || !Array.isArray(json.submissions)) {
      throw new Error("Invalid function response format");
    }

    // FIXED: Your function already returns the correct fields (no .data)
    submissions = json.submissions.map(item => ({
      name: item.name || "",
      email: item.email || "",
      phone: item.phone || "",
      message: item.message || "",
      created_at: item.created_at || new Date().toISOString()
    }));

    filtered = [...submissions];

    if (filtered.length === 0) {
      emptyState.classList.remove("hidden");
      return;
    }

    renderTable();
  } catch (err) {
    console.error("Error loading submissions:", err);
    loadingState.classList.add("hidden");
    errorState.classList.remove("hidden");

    try {
      document.getElementById("errorState").textContent =
        "Error loading submissions: " + err.message;
    } catch (e) {}
  }
}


// RENDER TABLE
function renderTable() {
  const start = (currentPage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  tableBody.innerHTML = "";

  pageItems.forEach(sub => {
    const row = document.createElement("tr");
    row.classList.add("border-b");

    // FIXED: Now using sub.name, sub.email, etc.
    row.innerHTML = `
      <td class="py-3 px-4">${sub.name}</td>
      <td class="py-3 px-4">${sub.email}</td>
      <td class="py-3 px-4">${sub.phone || ""}</td>
      <td class="py-3 px-4">${sub.message}</td>
      <td class="py-3 px-4">${new Date(sub.created_at).toLocaleString()}</td>
    `;

    tableBody.appendChild(row);
  });
}


// SEARCH FILTER
document.getElementById("searchInput").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  filtered = submissions.filter(sub =>
    sub.name.toLowerCase().includes(term) ||
    sub.email.toLowerCase().includes(term) ||
    (sub.phone || "").toLowerCase().includes(term) ||
    sub.message.toLowerCase().includes(term)
  );

  currentPage = 1;
  renderTable();
});


// SORTING
let sortState = {};

document.querySelectorAll(".sort-header").forEach(header => {
  header.addEventListener("click", () => {
    const key = header.dataset.key;

    sortState[key] = sortState[key] === "asc" ? "desc" : "asc";

    filtered.sort((a, b) => {
      const aVal = key === "created_at" ? new Date(a.created_at) : a[key];
      const bVal = key === "created_at" ? new Date(b.created_at) : b[key];

      return sortState[key] === "asc"
        ? aVal > bVal ? 1 : -1
        : aVal < bVal ? 1 : -1;
    });

    renderTable();
  });
});


// PAGINATION
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage < Math.ceil(filtered.length / pageSize)) {
    currentPage++;
    renderTable();
  }
});


// EXPORT CSV
document.getElementById("exportBtn").addEventListener("click", () => {
  const csv = [
    ["Name", "Email", "Phone", "Message", "Date"],
    ...filtered.map(sub => [
      sub.name,
      sub.email,
      sub.phone || "",
      sub.message,
      new Date(sub.created_at).toLocaleString()
    ])
  ]
    .map(row => row.join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "submissions.csv";
  a.click();
});


loadSubmissions();
