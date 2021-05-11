const burger = document.querySelector(".burger");
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const novigation = document.querySelector('.smollnovigation');

/* провіряєм чи є */
if (burger) {
    /* собитіє клік */
    burger.addEventListener("click", function (e) {
        /* добавляєм клас */
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        header.classList.toggle('_active');
        novigation.classList.toggle('_active');
    });
}