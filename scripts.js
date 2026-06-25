
// Contador de caracteres del texto
const mensaje = document.getElementById('mensaje');
const charCount = document.getElementById('charCount');

mensaje.addEventListener('input', function() {
    charCount.textContent = this.value.length;
});

// Scroll smooth cuando se clickee el navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Temita de mandar el correo - WEB3FORMS
const form = document.getElementById('contactForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "c9be1db3-ab4a-48d4-a672-7d66aba6c048");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Tu mensaje ha sido enviado, te estaré contactando!");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Algo salió mal. Intentalo de nuevo.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});