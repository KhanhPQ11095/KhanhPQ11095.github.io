window.onload = function () {
	var slideIndex = 1;
	var array = document.querySelectorAll('.slider img');
	var image = document.querySelectorAll('.slide-mini img');
	var firstImage = true;

	var i;

	function slideShow(n) {

		if (n > array.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = array.length;
		}

		for (i = 0; i < array.length; i++) {
			array[i].style.display = "none";
		}

		for (i = 0; i < image.length; i++) {
			image[i].className = image[i].className.replace(" active", "")
		}

		array[slideIndex-1].style.display = "block";
		image[slideIndex-1].className += " active";
	}

	function dir(n) {
		slideShow(slideIndex+=n);
	}

	function box(n) {
		slideShow(slideIndex=n);
	}

	slideShow(slideIndex);
	setInterval(function() { dir(1) }, 3000);
}