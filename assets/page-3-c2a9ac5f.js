import"./styles-fac82e35.js";import i from"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";new i(".swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});(()=>{const n=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),o=()=>{const t=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!t),n.classList.toggle("is-open");const c=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[c](document.body)};e.addEventListener("click",o),r.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
