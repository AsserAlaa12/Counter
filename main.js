let counter = 0;

const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.querySelector("#reset");

incrementBtn.addEventListener("click", () => {
    counter += 2;
    counterValue.innerHTML = counter;
});

decrementBtn.addEventListener("click", () => {
    counter -= 2;
    counterValue.innerHTML = counter;
});

resetBtn.addEventListener("click", () => {
    counter = 0;
    counterValue.innerHTML = counter;
});

function changeColor(){
    let red=Math.floor(Math.random()* 256);
    let green=Math.floor(Math.random()* 256);
    let blue=Math.floor(Math.random()* 256);
    let color="rgb("+ red +","+ green +"," + blue +")";
    document.getElementById("container").style.backgroundColor=color;
}


