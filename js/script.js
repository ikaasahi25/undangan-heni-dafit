document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       1. BUNGA DI BAGIAN COUPLE
       ========================================= */

    const coupleSection = document.querySelector(".couple");

    if (coupleSection) {

        const coupleObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        coupleSection.classList.add("bloom-active");
                    }

                });

            },
            {
                threshold: 0.25
            }
        );

        coupleObserver.observe(coupleSection);
    }



    /* =========================================
       2. COUNTDOWN
       ========================================= */

    const countdown = document.querySelector(".countdown");

    if (countdown) {

        const weddingDate =
            new Date("2026-11-09T08:00:00+07:00").getTime();


        function updateCountdown() {

            const now = new Date().getTime();

            const distance = weddingDate - now;


            if (distance <= 0) {

                countdown.innerHTML = `
                    <div class="countdown-finished">
                        Hari Bahagia Telah Tiba ♡
                    </div>
                `;

                return;
            }


            const days = Math.floor(
                distance / (1000 * 60 * 60 * 24)
            );


            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24))
                / (1000 * 60 * 60)
            );


            const minutes = Math.floor(
                (distance % (1000 * 60 * 60))
                / (1000 * 60)
            );


            const seconds = Math.floor(
                (distance % (1000 * 60))
                / 1000
            );


            const daysElement =
                document.querySelector("#days");

            const hoursElement =
                document.querySelector("#hours");

            const minutesElement =
                document.querySelector("#minutes");

            const secondsElement =
                document.querySelector("#seconds");


            if (daysElement) {
                daysElement.textContent =
                    String(days).padStart(2, "0");
            }

            if (hoursElement) {
                hoursElement.textContent =
                    String(hours).padStart(2, "0");
            }

            if (minutesElement) {
                minutesElement.textContent =
                    String(minutes).padStart(2, "0");
            }

            if (secondsElement) {
                secondsElement.textContent =
                    String(seconds).padStart(2, "0");
            }

        }


        updateCountdown();

        setInterval(updateCountdown, 1000);
    }



    /* =========================================
       3. MUSIK
       ========================================= */

    const music =
        document.getElementById("weddingMusic");

    const musicButton =
        document.getElementById("musicButton");


    if (music && musicButton) {

        musicButton.addEventListener(
            "click",
            function () {

                if (music.paused) {

                    music.play();

                    musicButton.classList.add("playing");

                    musicButton.innerHTML = "♫";

                } else {

                    music.pause();

                    musicButton.classList.remove("playing");

                    musicButton.innerHTML = "♪";

                }

            }
        );

    }



    /* =========================================
       4. ANIMASI MUNCUL SAAT SCROLL
       ========================================= */

    const revealSelectors = [

        ".opening .section-inner",

        ".couple .section-inner",

        ".events .section-label",

        ".events .section-title",

        ".countdown",

        ".event-card",

        ".venue .section-inner",

        ".quote .section-inner",

        ".map-section .section-inner",

        ".family .section-inner",

        ".closing .section-inner"

    ];


    revealSelectors.forEach(function (selector) {

        const elements =
            document.querySelectorAll(selector);


        elements.forEach(function (element) {

            element.classList.add("scroll-reveal");

        });

    });


    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    document
        .querySelectorAll(".scroll-reveal")
        .forEach(function (element) {

            revealObserver.observe(element);

        });



    /* =========================================
       5. KUPU-KUPU SAAT UNDANGAN DIBUKA 🦋
       ========================================= */

    function createButterfly(delay, position, size) {

        setTimeout(function () {

            const butterfly =
                document.createElement("div");

            butterfly.className = "butterfly";

            butterfly.textContent = "🦋";

            butterfly.style.left = position + "%";

            butterfly.style.fontSize = size + "px";

            document.body.appendChild(butterfly);


            setTimeout(function () {

                butterfly.remove();

            }, 5500);

        }, delay);

    }


    /* KUPU-KUPU MUNCUL SATU PER SATU */

    createButterfly(500, 20, 22);

    createButterfly(1000, 45, 27);

    createButterfly(1500, 70, 20);

    createButterfly(2000, 35, 24);

});