const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

/* ===========================
   ACCESO A MATERIAL ACADÉMICO
=========================== */

const PDF_PASSWORD = "guelaguetzaF2026";

const protectedLinks = document.querySelectorAll(".protected-pdf");
const accessModal = document.getElementById("accessModal");
const accessForm = document.getElementById("accessForm");
const accessPassword = document.getElementById("accessPassword");
const accessError = document.getElementById("accessError");
const closeButton = document.getElementById("accessModalClose");

let currentPDF = "";

function openModal(pdf){

    currentPDF = pdf;

    accessPassword.value = "";
    accessError.textContent = "";

    accessModal.classList.add("is-open");
    accessModal.setAttribute("aria-hidden","false");

    document.body.classList.add("modal-open");

    setTimeout(()=>{
        accessPassword.focus();
    },100);

}

function closeModal(){

    accessModal.classList.remove("is-open");
    accessModal.setAttribute("aria-hidden","true");

    document.body.classList.remove("modal-open");

}

protectedLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        openModal(link.dataset.pdf);

    });

});

accessForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(accessPassword.value===PDF_PASSWORD){

        window.open(currentPDF,"_blank");

        closeModal();

        return;

    }

    accessError.textContent="Contraseña incorrecta.";

    accessPassword.select();

});

closeButton.addEventListener("click",closeModal);

accessModal.addEventListener("click",(e)=>{

    if(e.target.classList.contains("access-modal-backdrop")){

        closeModal();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeModal();

    }

});
