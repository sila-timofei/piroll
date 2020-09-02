window.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelectorAll('.text-review'),
          dots = document.querySelectorAll('.pagination-item'),
          wroteRewiews = document.querySelectorAll('.wrote'),
          btnMenu = document.querySelector('.btn-menu'),
          menu = document.querySelector('.link-menu');

    //slider reviews
    function hideText() {
        text.forEach(text => {
            text.classList.remove('show');
        });
        wroteRewiews.forEach(text => {
            text.classList.remove('show');
        });
    }

    function changeActivePagination() {
        dots.forEach(dot => {
            dot.classList.remove('pagination-active');
        });
    }

    function changeClass(i) {
        dots[i].classList.add('pagination-active');
        text[i].classList.add('show');
        wroteRewiews[i].classList.add('show');
    }

    dots[0].addEventListener('click', () => {
        changeActivePagination();
        hideText();
        changeClass(0);
    });

    dots[1].addEventListener('click', () => {
        changeActivePagination();
        hideText();
        changeClass(1);
    });

    dots[2].addEventListener('click', () => {
        changeActivePagination();
        hideText();
        changeClass(2);
    });


    //menu
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('show-menu');
        btnMenu.classList.toggle('inclineMenu');
    });
});