document.addEventListener("DOMContentLoaded", function () {

    /*
     * Automatically display the current year
     */

    const yearElements =
        document.querySelectorAll("#year");

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    /*
     * Contact Form
     */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const formMessage =
                    document.getElementById(
                        "formMessage"
                    );


                formMessage.classList.remove(
                    "d-none"
                );


                contactForm.reset();

            }
        );

    }

});
