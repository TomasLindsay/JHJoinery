

const cards = document.querySelectorAll(".card");

const leftBtn = document.querySelector(".left")
const rightBtn  = document.querySelector(".right");

let activeIndex = 1;

function updateCarousel(){
    cards.forEach((card, index)=>{
        card.classList.remove("active");
        if (index === activeIndex){
            card.classList.add("active");
        }
    });
}

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        activeIndex = index;
        updateCarousel();
    });
});

console.log(rightBtn);
console.log(typeof rightBtn);

function rightClick(){
    console.log("clicked");
    activeIndex++;

    if(activeIndex >= cards.length){
        activeIndex = 0;
    }
    updateCarousel();
}

function leftClick(){
    activeIndex--;

    if(activeIndex < 0){
        activeIndex = cards.length - 1;
    }
    updateCarousel();
}