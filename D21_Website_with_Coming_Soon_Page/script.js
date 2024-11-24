// Set the target date for the countdown
const countDownDate = new Date("Oct 16, 2025 00:00:00").getTime();

// Function to calculate and update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(interval);
        displayCountdown(0, 0, 0, 0);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    displayCountdown(days, hours, minutes, seconds);
}

// Function to display the countdown values
function displayCountdown(days, hours, minutes, seconds) {
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
