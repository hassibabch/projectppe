
let openNav = document.querySelector(".open-nav") ;
let closNav = document.querySelector(".close-nav") ;
let nav = document.querySelector(".links") ;
// opens nav dropdown 
const open_nav =() =>{
    nav.style.display = "flex"
    openNav.style.display = "none"
    closNav.style.display = "block"
}

// close nav dropdown 
const closeNav =() =>{
    closNav.style.display = "none"
    nav.style.display = "none"
    openNav.style.display = "block"
}
openNav.addEventListener('click',open_nav);
closNav.addEventListener('click',closeNav);


let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
})