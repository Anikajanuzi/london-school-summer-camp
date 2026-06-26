document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    if (!form) return;

    const submitButton = form.querySelector('button[type="submit"]');
    const childAgeInput = document.getElementById("childAge");
    const childNameInput = document.getElementById("childname");
    const subjectInput = form.querySelector('input[name="_subject"]');
    const reservationIdInput = document.getElementById("reservationId");
    const submittedAtInput = document.getElementById("submittedAt");
    const status = document.createElement("div");

    status.className = "reservation-status";
    status.setAttribute("aria-live", "polite");
    form.appendChild(status);

    function translate(message) {
        return window.siteI18n?.t ? window.siteI18n.t(message) : message;
    }

    function showStatus(message, type) {
        status.textContent = translate(message);
        status.className = `reservation-status is-visible is-${type}`;
    }

    function clearStatus() {
        status.textContent = "";
        status.className = "reservation-status";
    }

    function getChildAgeValidationMessage() {
        return "Only children from 5 to 12 years old can be accepted.";
    }

    function validateChildAge() {
        const childAgeValue = childAgeInput.value.trim();
        const childAge = Number(childAgeValue);
        const isValidAge = /^\d+$/.test(childAgeValue)
            && Number.isInteger(childAge)
            && childAge >= 5
            && childAge <= 12;

        childAgeInput.setCustomValidity(isValidAge ? "" : translate(getChildAgeValidationMessage()));
        return isValidAge;
    }

    function queueChildAgeValidation() {
        window.setTimeout(validateChildAge, 0);
    }

    function createReservationId() {
        if (window.crypto?.randomUUID) {
            return window.crypto.randomUUID().slice(0, 8).toUpperCase();
        }

        return Math.random().toString(36).slice(2, 10).toUpperCase();
    }

    function getSubmissionTimestamp() {
        const now = new Date();
        const date = new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(now);
        const time = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }).format(now);

        return `${date}, ${time}`;
    }

    function updateCurrentReservationMetadata() {
        const reservationId = createReservationId();
        const submittedAt = getSubmissionTimestamp();
        const childName = childNameInput.value.trim() || "Child";

        if (subjectInput) {
            subjectInput.value = `New Reservation - ${childName} - ${submittedAt} - ${reservationId}`;
        }

        if (reservationIdInput) {
            reservationIdInput.value = reservationId;
        }

        if (submittedAtInput) {
            submittedAtInput.value = submittedAt;
        }
    }

    if (childAgeInput) {
        childAgeInput.addEventListener("input", queueChildAgeValidation);
        childAgeInput.addEventListener("change", queueChildAgeValidation);
        childAgeInput.addEventListener("invalid", function () {
            validateChildAge();
            showStatus(getChildAgeValidationMessage(), "error");
        });
        validateChildAge();
    }

    form.addEventListener("submit", function () {
        clearStatus();
        validateChildAge();

        if (submitButton && form.checkValidity()) {
            updateCurrentReservationMetadata();
            submitButton.disabled = true;
            submitButton.textContent = translate("Sending...");
        }
    });
});
