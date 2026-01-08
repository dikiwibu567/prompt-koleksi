document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.free-card');
        const prompt = card.getAttribute('data-prompt');
        if (prompt) {
            navigator.clipboard.writeText(prompt).then(() => {
                showNotification('✅ Prompt berhasil disalin!');
            });
        }
    });
});

document.querySelectorAll('.free-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('free-btn')) {
            const prompt = this.getAttribute('data-prompt');
            if (prompt) {
                navigator.clipboard.writeText(prompt).then(() => {
                    showNotification('✅ Prompt berhasil disalin!');
                });
            }
        }
    });
});

function showNotification(msg) {
    const notif = document.getElementById('copyNotification');
    notif.textContent = msg;
    notif.style.display = 'block';
    setTimeout(() => notif.style.display = 'none', 2500);
}

const searchInput = document.getElementById('searchInput');
const freeCards = document.querySelectorAll('.free-card');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    freeCards.forEach(card => {
        const title = card.querySelector('.free-card-title').textContent.toLowerCase();
        const tag = card.querySelector('.free-card-tag').textContent.toLowerCase();
        if (title.includes(query) || tag.includes(query)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});
