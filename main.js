// const img = document.querySelector(".slider__img");
// const dots = document.querySelectorAll(".slider__dot");
// const imgArray =["1.jpg","2.jpg","3.jpg"];

// let currentIndex = 0;

// function changeIndex(ind) {
//     currentIndex = ind;
//     slide(currentIndex);
// }

// function nextSlide(direction) {
//     currentIndex += direction;
//     if(currentIndex >= imgArray.length) {
//         currentIndex = 0;
//     }else if(currentIndex < 0) {
//         currentIndex = imgArray.length - 1;
//     }
    
//     slide(currentIndex);
// }
// function slide(index) {
//     img.style.display = 'none';
//     setTimeout(() =>{
//         img.style.display = 'block';
//     }, 10);
//     img.src = imgArray[index];
//     updateDots(index);
// }
// function updateDots(index){
//     for(let dot of dots){
//         dot.classList.remove('active');
//     }
//    dots[index].classList.add('active');
// }








// 🆂🆆🅸🅿🅴



// document.querySelector('.slider').addEventListener('touchstart', handleTouchStart, false);
// document.querySelector('.slider').addEventListener('touchmove', handleTouchMove, false);

// const img = document.querySelector(".slider__img");

// const imgArray =["1.jpg","2.jpg","3.jpg"];


// let x1 = null;
// let y1 = null;

// function handleTouchStart(event){

//     const firstTouch = event.touches[0];
//     x1 = firstTouch.clientX;
//     y1 = firstTouch.clientY;
// }

// function handleTouchMove(event){

//     if (!x1 ||  !y1){
//         return false;
//     }
//     let x2 = event.touches[0].clientX;
//     let y2 = event.touches[0].clientY;

//     let xDiff = x2 - x1;
//     let yDiff = y2 - y1;

//     if (Math.abs(xDiff) > Math.abs(yDiff)){

//         if (xDiff > 0){
//             console.log('right');
//             imgArray.length + 1;
//         } 
//         else{
//             console.log('left');
//             imgArray.length - 1
//         }
//     }
//     x1 = null;
//     y1 = null;

// }

// function slide(index) {
//     img.style.display = 'none';
//     setTimeout(() =>{
//         img.style.display = 'block';
//     }, 10);
//     img.src = imgArray[index];
    
// }

// function nextSlide(direction) {
//     currentIndex += direction;
//     if(currentIndex >= imgArray.length) {
//         currentIndex = 0;
//     }
//     else if(currentIndex < 0) {
//         currentIndex = imgArray.length - 1;
//     }
    
//     slide(currentIndex);
// }



new Swiper('.image-slider', {

    spaceBetween:20,
    // pagination:{
    //     el: '.swiper-pagination',
    //     type:'bullets',
    //     clickable: true,
    //     dynamicBullets: true,
    // }
    centeredSlides: true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'fade',
    fadeEffect:{
        cossFade: true,
    },
    loop: true,

    autoplay:{
        delay: 3000,

        stopOnLastSlide: true,

        disableOnInteraction: false,
    },
});