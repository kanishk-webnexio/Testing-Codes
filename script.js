const text = "This text types out continuously...";
const target = document.getElementById("typed-text");

let i = 0;

function typeLoop() {

  target.textContent = "";

  function type() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(type, 70);
    } else {
      setTimeout(() => {
        i = 0;
        typeLoop();
      }, 2000);
    }
  }

  type();
}

typeLoop();
