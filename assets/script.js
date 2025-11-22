document.addEventListener('DOMContentLoaded', function() {
    // --- 1. Collapsible Buttons Logic ---
    var coll = document.getElementsByClassName('collapsible-button');
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function() {
            this.classList.toggle('active');

            var content = this.nextElementSibling;
            // Best practice: use class toggling for visibility instead of inline style.display
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }

    // --- 2. Particles.js Initialization (Now runs safely) ---
    // Ensure the <div id="particles-js"></div> is in your HTML
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                // Your colorful array is correct
                "value": ["#FFFFFF", "#FFD700", "#EB9E3D", "#12A1C7", "#ABBF63"] 
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.8,
                "random": true
            },
            "size": {
                "value": 2,
                "random": true
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 0.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "retina_detect": true
    });

    // --- 3. Fullscreen and Scroll Logic ---
    const iframe = document.getElementById('myIframe'); // Ensure your <iframe> has id="myIframe"
    const fullscreenButton = document.getElementById('fullscreenButton'); // Ensure this button exists
    const scrollToTopBtn = document.getElementById("scrollToTopBtn"); // Ensure this button exists

    // FIX: Corrected arrow function syntax: () => {
    if (fullscreenButton) {
        fullscreenButton.addEventListener('click', () => { 
            if (iframe && iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe && iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe && iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        });
    }

    if (scrollToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        });

        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
