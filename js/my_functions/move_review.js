document.addEventListener('click', (e) => {

    if (e.target.closest('.review__circle') && !e.target.closest('._open')) {

        const allCircleBody = document.querySelectorAll('.clients__review');
        const allCircle = document.querySelectorAll('.review__circle');
        for (let i = 0; i < allCircleBody.length; i++) {
            allCircleBody[i].classList.remove('_open');
        }
        for (let i = 0; i < allCircle.length; i++) {
            allCircle[i].classList.remove('_open');
        }

        const circle = e.target.closest('.review__circle');
        const circleBody = circle.closest('.clients__review');
        circle.classList.add('_open');
        circleBody.classList.add('_open');

    } else if ((e.target.closest('._open') || e.target.closest('.review__circle'))) {
        const menu = document.querySelectorAll('.clients__review');
        const circle = document.querySelectorAll('.review__circle');
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove('_open');
        }
        for (let i = 0; i < circle.length; i++) {
            circle[i].classList.remove('_open');
        }
    }

});