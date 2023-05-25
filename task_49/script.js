// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

document.addEventListener('DOMContentLoaded',()=>{
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.targetTouches[0].pageX);
    });
/* 
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');

        box.addEventListener('touchend', (e) => {
            e.preventDefault();
            console.log('Start');
        })
    }) */

    // touches
    // targetTouches
    // changedTouches
});