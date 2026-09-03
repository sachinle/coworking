// const sliderContent = document.querySelector('.slider-content');
// let scrollValue = 0;

// function scrollImages(e) {
//     if (e.deltaY > 0) {
//         scrollValue += 100; 
//     } else {
//         scrollValue -= 100; 
//     }
    
//     scrollValue = Math.min(Math.max(scrollValue, 0), sliderContent.scrollWidth - sliderContent.clientWidth);
    
//     sliderContent.style.transform = `translateX(-${scrollValue}px)`;
//     e.preventDefault();
// }

// window.addEventListener('wheel', scrollImages);


const scrollContainer = document.querySelector(".slider");

if (scrollContainer) {
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
}

const logoList = document.querySelector(".logo3_list");
const logoComponent = document.querySelector(".logo3_component");
if (logoList && logoComponent) {
    var copy = logoList.cloneNode(true);
    logoComponent.appendChild(copy);
}
       