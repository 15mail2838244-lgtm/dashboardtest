// Auth guard - redirect to login if not authenticated
if (localStorage.getItem('adminAuth') !== 'true') {
  window.location.href = '/autopilotai/login.html';
}

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('adminAuth');
  window.location.href = '/autopilotai/login.html';
});

// Fetch and display submissions
async function loadSubmissions() {
  const loadingState = document.getElementById('loadingState');
  const errorState = document.getElementById('errorState');
  const errorStateText = document.getElementById('errorStateText');
  const emptyState = document.getElementById('emptyState');
  const submissionsContainer = document.getElementById('submissions');

  try {
    const response = await fetch('/.netlify/functions/get-submissions');

    if (!response.ok) {
      throw new Error(`Failed to fetch submissions: ${response.statusText}`);
    }

    const data = await response.json();

    // Hide loading state
    loadingState.classList.add('hidden');

    if (!data.submissions || data.submissions.length === 0) {
      emptyState.classList.remove('hidden');
      return;
    }

    // Render submissions
    submissionsContainer.innerHTML = data.submissions.map(submission => {
      const date = new Date(submission.submitted_at);
      const formattedDate = date.toLocaleDateString('en-ZA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      return `
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-1">${escapeHtml(submission.name)}</h3>
              <p class="text-sm text-gray-600">${escapeHtml(submission.email)}</p>
              ${submission.phone ? `<p class="text-sm text-gray-600">${escapeHtml(submission.phone)}</p>` : ''}
            </div>
            <div class="text-right">
              <span class="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-semibold rounded-full">
                New
              </span>
              <p class="text-xs text-gray-500 mt-2">${formattedDate}</p>
            </div>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <p class="text-sm font-semibold text-gray-700 mb-2">Message:</p>
            <p class="text-gray-700 leading-relaxed whitespace-pre-wrap">${escapeHtml(submission.message)}</p>
          </div>
        </div>
      `;
    }).join('');

  } catch (error) {
    console.error('Error loading submissions:', error);
    loadingState.classList.add('hidden');
    errorState.classList.remove('hidden');
    errorStateText.textContent = error.message;
  }
}

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Load submissions on page load
loadSubmissions();
