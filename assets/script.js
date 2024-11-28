const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let counter = 0
let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")
let bannerImage = document.querySelector("#banner .banner-img")
let bannerText = document.querySelector("#banner p")
let dotsContainer = document.querySelector(".dots")


// Création des indicateurs
slides.forEach(() => {
	const dot = document.createElement('div');
	dot.className = 'dot'; // Classe de base des points
	dotsContainer.appendChild(dot);
	dotsContainer.children[counter].classList.add('dot_selected');
});


function nextSlide(){

	counter = counter+1

	if (counter >= slides.length){
	
		counter = 0

	}
	
	let nextImage = slides[counter].image
	let nextText = slides[counter].tagLine
	bannerText.innerHTML = nextText 
	bannerImage.src = "assets/images/slideshow/" + nextImage
	dotsContainer.querySelector('.dot_selected')?.classList.remove('dot_selected');
    dotsContainer.children[counter].classList.add('dot_selected');
	
	
	
}

function previousSlide(){

	counter = counter-1

	if (counter < 0){

		counter = slides.length -1

}
	
	let previousImage = slides[counter].image
	let previousText = slides[counter].tagLine
	bannerText.innerHTML = previousText
	bannerImage.src = "assets/images/slideshow/" + previousImage
	dotsContainer.querySelector('.dot_selected')?.classList.remove('dot_selected');
    dotsContainer.children[counter].classList.add('dot_selected');
	
	
}


arrowRight.addEventListener("click",nextSlide)
arrowLeft.addEventListener("click",previousSlide)

