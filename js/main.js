const slider = tns({
    container: '.slider',
    items: 2.7,
    
    mouseDrag: true,
    gutter: 20,
    speed: 400,
    //loop: false,//ломает работу лайзилоуд
    autoWidth: true,
    lazyload: true,
    swipeAngle: false,
    controlsContainer: '.locations__controls',
    nav: false

});

prevMobile = document.querySelector('.locations__controls--mobile .prev');
nextMobile = document.querySelector('.locations__controls--mobile .next');

// prevMobile.addEventListener('click', function(){
//     slider.goTo('prev');
// })
// nextMobile.addEventListener('click', function(){
//     slider.goTo('next');
// })

// prevMobile.onclick = function(){
//     slider.goTo('prev');
// }
// nextMobile.onclick = function(){
//     slider.goTo('next');
// }


prevMobile.onclick = () => slider.goTo('prev');

nextMobile.onclick = () => slider.goTo('next');