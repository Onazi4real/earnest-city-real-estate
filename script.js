document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MOBILE RESPONSIVE HAMBURGER TOGGLE
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Close navigation tray instantly upon selection
        document.querySelectorAll("#navMenu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    // 2. FLOATING BACK TO TOP INTERACTION ENGINE
    const topBtn = document.getElementById("topBtn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            topBtn.style.display = "flex";
        } else {
            topBtn.style.display = "none";
        }
    });

    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 3. HIGH-PERFORMANCE DATA COUNTER INCREMENT LOGIC
    const counters = document.querySelectorAll(".counter");
    const speed = 120; // Lower values create faster counter loops

    const runCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Trigger metrics instantly when viewport scrolls over section
    const statsSection = document.querySelector(".stats");
    if (statsSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        observer.observe(statsSection);
    }
});

window.addEventListener('DOMContentLoaded', () => {
    // Elegant slow motion structural opening engine
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100); 
});
