const weddingDate = new Date("April 5, 2026 13:30:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML =
            "<p>Today is the day! 🤍</p>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);


const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const animationPage = document.querySelector(".animation-page");
const animateButton = document.querySelector(".animate-button");
const mainContent = document.querySelector(".main-content");
const submitButton = document.querySelector(".submit-button");

animateButton.addEventListener("click", () => {
    animateButton.style.display = "none";
    mainContent.style.display = "flex";
    slide1.style.transform = "translateX(-100%)";
    slide2.style.transform = "translateX(100%)";
});

submitButton.addEventListener("click", () => {
    localStorage.setItem("rsvpSubmitted", "true");
});


if (localStorage.getItem("rsvpSubmitted") === "true") {
    document.querySelector(".form-section").style.display = "none";
    document.querySelector(".success-message").style.display = "block";
}
