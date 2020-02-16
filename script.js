let images = document.querySelectorAll(".slider img");
let blockText = document.querySelectorAll(".slider .block-text");
let current = 0;

function moveSlider(){
	for (let i=0; i<images.length; i++){
		images[i].classList.add("opacity0");
		blockText[i].classList.add("opacity0");
	}
	images[current].classList.remove("opacity0");
	blockText[current].classList.remove("opacity0");
	if(current+1 == images.length){
		current = 0;
	}
	else{
		current++;
	}
}
moveSlider();

let timerId = setInterval(moveSlider, 5000);

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let fiveMinutes = 60 * 10,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.5;
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        let w = window.pageYOffset, 
            hash = this.href.replace(/[^#]*(.*)/, '$1');  
        t = document.querySelector(hash).getBoundingClientRect().top,  
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}