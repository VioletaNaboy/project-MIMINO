import"./styles-fac82e35.js";/* empty css                            */import i from"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";new i(".swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});(()=>{const o=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{const t=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const c=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[c](document.body)};e.addEventListener("click",n),r.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
