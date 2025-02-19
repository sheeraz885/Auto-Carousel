let img = document.getElementById("img");
let pics = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg"];
let count = 0;
let interval;

// Function to rotate images
function rotate(value) {
    if (value === '+') {
        count++;
        if (count > 5) {
            count = 0;
        }
    } else {
        count--;
        if (count < 0) {
            count = 5;
        }
    }

    img.setAttribute("src", pics[count]);

    // Clear the previous interval and restart auto-rotation after manual rotation
    clearInterval(interval);
    interval = setInterval(() => rotate('+'),1000);
}

// Start automatic rotation
interval = setInterval(() => rotate('+'), 1000);