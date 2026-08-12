/* =========================================
   AUTOMATE — MAIN JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       MOBILE MENU
       ============================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }

        });


        /* Close menu after clicking a link */

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuToggle.innerHTML = "☰";

            });

        });

    }


    /* ==============================
       SMOOTH SCROLL
       ============================== */

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#" &&
                document.querySelector(targetId)
            ) {

                event.preventDefault();

                const target = document.querySelector(targetId);

                const navbarHeight = 75;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }

        });

    });


    /* ==============================
       CONTACT FORM
       ============================== */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const name =
                    document.getElementById("name").value.trim();

                const email =
                    document.getElementById("email").value.trim();

                const service =
                    document.getElementById("service").value;

                const message =
                    document.getElementById("message").value.trim();


                /* Basic validation */

                if (!name) {
                    alert("Please enter your name.");
                    return;
                }

                if (!email) {
                    alert("Please enter your email.");
                    return;
                }

                if (!service) {
                    alert("Please select a service.");
                    return;
                }

                if (!message) {
                    alert("Please describe your project.");
                    return;
                }


                /* Email validation */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email)) {

                    alert(
                        "Please enter a valid email address."
                    );

                    return;
                }


                /* Temporary success message */

                alert(
                    "Thank you, " +
                    name +
                    "! Your message has been received."
                );


                /*
                 * IMPORTANT:
                 *
                 * This form is currently frontend-only.
                 *
                 * Later we can connect it to:
                 *
                 * n8n Webhook
                 * CRM
                 * Google Sheets
                 * Email
                 *
                 * No external backend is connected yet.
                 */


                contactForm.reset();

            }
        );

    }


    /* ==============================
       NAVBAR SCROLL EFFECT
       ============================== */

    const navbar =
        document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {

                navbar.style.background =
                    "rgba(7, 11, 20, 0.95)";

            } else {

                navbar.style.background =
                    "rgba(7, 11, 20, 0.82)";

            }

        });

    }


    /* ==============================
       SIMPLE REVEAL ANIMATION
       ============================== */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .project-card, .process-card, .about-card, .contact-form"
        );


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        revealObserver.observe(element);

    });


    /* ==============================
       CURRENT YEAR
       ============================== */

    const year = new Date().getFullYear();

    const footerText =
        document.querySelector("footer p");

    if (footerText) {

        footerText.innerHTML =
            "© " +
            year +
            " Automate. All rights reserved.";

    }


    /* ==============================
       CONSOLE MESSAGE
       ============================== */

    console.log(
        "Automate website loaded successfully."
    );

});