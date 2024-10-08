let contrastToggle = false;
let isModalOpen = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_43i3vga",
      "template_hylkrpc",
      event.target,
      "U825GTDPigap3q1zL"
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at nh894@nyu.edu."
      );
    });
}

function toggleModal() {
  isModalOpen = !isModalOpen;
  if (isModalOpen) {
      document.body.classList.add("modal--open");
  } else {
      document.body.classList.remove("modal--open");
  }
}