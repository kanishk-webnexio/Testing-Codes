const text = "This text types out continuously...";
const target = document.getElementById("typed-text");

let index = 0;
let deleting = false;

function loop() {
  if (!deleting) {
    target.textContent = text.substring(0, index);
    index++;

    if (index > text.length) {
      deleting = true;
      setTimeout(loop, 1500);
      return;
    }
  } else {
    target.textContent = text.substring(0, index);
    index--;

    if (index < 0) {
      deleting = false;
      index = 0;
    }
  }

  setTimeout(loop, deleting ? 40 : 80);
}

loop();
