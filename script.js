function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDateTime = now.toLocaleDateString('fr-FR', options);
    document.getElementById('datetime').textContent = formattedDateTime;
}

// Mettre à jour l'heure et la date toutes les secondes
setInterval(updateDateTime, 1000);
updateDateTime();

// Attendre que le DOM soit chargé-----------------------
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.style.position = "fixed";
        themeToggle.style.top = "10px";
        themeToggle.style.left = "10px";
        themeToggle.style.padding = "10px";
        themeToggle.style.border = "none";
        themeToggle.style.cursor = "pointer";
        themeToggle.style.background = "#333";
        themeToggle.style.color = "#fff";
        themeToggle.style.borderRadius = "5px";
        themeToggle.style.transition = "background 0.3s";

        themeToggle.addEventListener("mouseover", function() {
            themeToggle.style.background = "#555";
        });
        themeToggle.addEventListener("mouseout", function() {
            themeToggle.style.background = "#333";
        });
        
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
            this.textContent = document.body.classList.contains("light-mode") ? "🌞 Mode Clair" : "🌙 Mode Sombre";
            localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
        });

        // Charger le thème au chargement de la page
        if (localStorage.getItem("theme") === "light") {
            document.body.classList.add("light-mode");
            themeToggle.textContent = "🌞 Mode Clair";
        }
    }

    // Appliquer les styles du mode clair
    const style = document.createElement("style");
    style.textContent = `
        .light-mode {
            background-color: #fff;
            color: #000;
        }
        .light-mode header, .light-mode footer {
            background-color: #ddd;
            color: #000;
        }
        .light-mode nav ul li a {
            color: #000;
        }
    `;
    document.head.appendChild(style);
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

const form = document.querySelector("form");
const emailInput = document.getElementById("email");

emailInput.addEventListener("input", () => {
    if (!emailInput.checkValidity()) {
        emailInput.classList.add("invalid");
    } else {
        emailInput.classList.remove("invalid");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Merci pour votre message !");
    form.reset();
});

// Gestion du menu déroulant
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
    
    // Fermer le menu quand on clique à l'extérieur
    document.addEventListener('click', (e) => {
        if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
            navList.classList.remove('active');
        }
    });
    
    // Fermer le menu après sélection sur mobile
    navList.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navList.classList.remove('active');
        }
    });
}