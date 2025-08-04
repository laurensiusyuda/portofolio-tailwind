document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typewriter-text");
    const textToType = textElement.textContent;

    textElement.textContent = "";

    let index = 0;
    let typingSpeed = 80;
    let deleting = false;

    function typeWriter() {
        if (!deleting) {
            if (index < textToType.length) {
                textElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                deleting = true;
                setTimeout(typeWriter, 200);
            }
        } else {
            if (index > 0) {
                textElement.textContent = textToType.substring(0, index - 1);
                index--;
                setTimeout(typeWriter, typingSpeed);
            } else {
                deleting = false;
                setTimeout(typeWriter, 200);
            }
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-8");
            el.classList.add("opacity-100", "translate-y-0");
          } else {
            el.classList.remove("opacity-100", "translate-y-0");
            el.classList.add("opacity-0", "translate-y-8");
          }
        });
      }, {
        threshold: 0.35
      });
      
      document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
      });
      
    typeWriter();
});
