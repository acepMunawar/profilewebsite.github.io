    const contactBtn = document.getElementById("contactBtn");
    const popup = document.getElementById("contactPopup");
    const closeBtn = popup.querySelector(".close-btn");
    var togglebtn = document.querySelector(".togglebtn");
    var nav = document.querySelector(".navlinks");
    if (togglebtn) {
      togglebtn.addEventListener("click", function () {
        this.classList.toggle("click");
        nav.classList.toggle("open");
      });
    }

    contactBtn.addEventListener("click", function (e) {
      e.preventDefault();
      popup.style.display = "flex";
      // Focus popup for accessibility
      popup.querySelector(".popup-content").focus();
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    // Close popup when clicking outside the content
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });

    // Optional: close popup on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && popup.style.display === "flex") {
        popup.style.display = "none";
      }
    });