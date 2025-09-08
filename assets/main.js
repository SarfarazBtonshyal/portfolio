document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=sarfarazsaf224@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`, '_blank');

    const ok = document.getElementById('contact-success');
    if (ok) {
      ok.classList.remove('hidden');
      setTimeout(() => ok.classList.add('hidden'), 5000);
    }
  });
}


