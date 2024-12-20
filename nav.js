const list = document.getElementById("minu");
const burger = document.getElementById("tg");
let isnav = false;
burger.addEventListener("click",()=>{
    list.style.display = (isnav?"block":"none");
    isnav = !isnav;
})