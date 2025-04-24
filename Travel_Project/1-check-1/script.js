const text = "schooltrip";
let index = 0;
const speed = 100; // milliseconds

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    // Stop the blinking cursor after typing is done
    document.getElementById("typing-text").style.borderRight = "none";
  }
}

window.onload = typeWriter;
