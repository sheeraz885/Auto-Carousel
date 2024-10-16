let img = document.getElementById("img");
let pics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let count = 0;
let interval;

// Function to rotate images
function rotate(value) {
    if (value === '+') {
        count++;
        if (count > 5) {
            count = 0;
        }
    } else {a
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