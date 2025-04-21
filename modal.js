(() => {
    const refs = {
      openModalBtn1: document.querySelector("[button-modal-open-1]"),
      openModalBtn2: document.querySelector("[button-modal-open-2]"),
      openModalBtn3: document.querySelector("[button-modal-open-3]"),
      closeModalBtn1: document.querySelector("[button-modal-close-1]"),
      closeModalBtn2: document.querySelector("[button-modal-close-2]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn1.addEventListener("click", toggleModal_1);
    refs.openModalBtn2.addEventListener("click", toggleModal_2);
    refs.openModalBtn3.addEventListener("click", toggleModal_3);
    refs.closeModalBtn1.addEventListener("click", closeModal);
    refs.closeModalBtn2.addEventListener("click", closeModal);
  
    function toggleModal_1() {
      refs.modal.classList.remove("is__hidden");
      document.body.classList.toggle("no-scroll");
      document.getElementsByClassName("modal__img")[0].setAttribute("src", "./images/modal_image_1.png");
    }

    function toggleModal_2() {
      refs.modal.classList.remove("is__hidden");
      document.body.classList.toggle("no-scroll");
      document.getElementsByClassName("modal__img")[0].setAttribute("src", "./images/modal_image_2.png");
    }

    function toggleModal_3() {
      refs.modal.classList.remove("is__hidden");
      document.body.classList.toggle("no-scroll");
      document.getElementsByClassName("modal__img")[0].setAttribute("src", "./images/modal_image_3.png");
    }

    function closeModal() {
      refs.modal.classList.add("is__hidden");
      document.body.classList.toggle("no-scroll");
      document.getElementsByClassName("modal__img")[0].setAttribute("src", "./images/");
    }
  })();