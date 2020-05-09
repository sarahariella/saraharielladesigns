function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '300%', 
        triggerElement: '.title',
        triggerHook: 0,
    })
    .setPin('.title')
    .addTo(controller);
}

splitScroll();
