// Initialize variables to store timer values
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

// Reference to the HTML element displaying the timer
let timeRef = document.querySelector(".timer-display");

// Variable to store the interval ID for the timer
let int = null;

// Event listener for the "Start" button
document.getElementById("start-timer").addEventListener("click", () => {
    // Clear any existing intervals
    if(int !== null) {
        clearInterval(int);
    }
    // Set a new interval to update and display the timer every 10 milliseconds
    int = setInterval(displayTimer, 10);
});

// Event listener for the "Stop" button
document.getElementById("pause-timer").addEventListener("click", () => {
    // Stop the interval, pausing the timer
    clearInterval(int);
});

// Event listener for the "Reset" button
document.getElementById("reset-timer").addEventListener("click", () => {
    // Stop the interval and reset timer values
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    // Update the display with the reset values
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
});

// Function to calculate and display the timer
function displayTimer() {
    // Increment milliseconds and update other units accordingly
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    // Format values with leading zeros if needed
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    // Update the timer display with the formatted values
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
