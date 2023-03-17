// FUNCTION TO RUN ON BUTTON CLICK.
let sideshow = () => {
    let left = document.getElementById("left");
    left.classList.toggle("visible");
    let btn = document.getElementById("btn");
    btn.classList.toggle("open");
}

// TEXT CHANGING IN STYLE.
const obj = {
    strings: ["Coder.", "FreeLancer.", "YouTuber."],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 1000,
    loop: true,
}
const typed = new Typed('.new1', obj);
// END