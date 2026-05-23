document.addEventListener('DOMContentLoaded', () => {
          //menu-burger

          const burger = document.querySelector(".mobile-menu__burger");
          const menu = document.querySelector(".mobile-menu__bl");
          const body = document.body;

          if (burger && menu) {
               burger.addEventListener("click", () => {
                    burger.classList.toggle("close");
                    menu.classList.toggle("active");
                    body.classList.toggle("lock");
               });
          }

          /*screenshots slider*/

          const wraper = document.querySelector('.screenshots__wrapper');
          const items = document.querySelectorAll('.screenshots__item');
          const prevBtn = document.querySelector('.prev-btn');
          const nextBtn = document.querySelector('.next-btn');
          let index = 0;

          const move = (step) => {
               if (window.innerWidth >= 768) return;
               const maxStep = items.length - 1;
               index = (index + step + maxStep) % maxStep;
               wraper.style.transform = `translateX(-${index * 50}%)`;
          }

          prevBtn?.addEventListener('click', () => move(-1));
          nextBtn?.addEventListener('click', () => move(1));

          window.addEventListener('resize', () => {
               if (window.innerWidth >= 768) {
                    wraper.style.transform = '';
                    index = 0;
               }
          })

          /*faq*/

          document.querySelectorAll('.faq__item').forEach(btn => {
               btn.addEventListener('click', () => btn.classList.toggle('active'));
          })

     }
)