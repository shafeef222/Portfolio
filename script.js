const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const submitButton = contactForm.querySelector("button");

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    formStatus.textContent = "";

    const formData = new FormData(contactForm);

    try {

        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            formStatus.textContent =
                "Thank you! Your message has been sent successfully.";

            contactForm.reset();

        } else {

            formStatus.textContent =
                "Something went wrong. Please try again.";

        }

    } catch (error) {

        formStatus.textContent =
            "Unable to send the message. Please try again.";

    }

    submitButton.disabled = false;
    submitButton.textContent = "Send Message";

});