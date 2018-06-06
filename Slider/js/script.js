// Prev-Next
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Dots
function currentSlides(n) {
	showSlides(slideIndex = n)
}

function showSlides(n) {
	var slides = document.getElementsByClassName("slider_box");
	var dots = document.getElementsByClassName("dot");
	if (n === undefined) {
		n = ++slideIndex;
	}
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (var i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for (var i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	// Change Img
	$(slides[slideIndex-1]).fadeIn(1000);
	$(slides[slideIndex-1]).delay(3000);
	$(slides[slideIndex-1]).fadeOut(1000);

	setTimeout(showSlides, 4000);
}
