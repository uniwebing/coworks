const scrollButton = document.querySelector('#scrollToTopBtn');

window.addEventListener('scroll', function(){
    // console.log('scroll');
    // console.log(window.innerHeight) высота того что мы видим в экране;
    // console.log(window.pageYOffset) вся высота страницы сверху в низ;

    if (window.pageYOffset > window.innerHeight) {
        scrollButton.classList.add('top-link--visible');
    } else {
        scrollButton.classList.remove('top-link--visible');
    }

})

