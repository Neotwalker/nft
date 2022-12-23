$(function() {

	$('.down').click(function(){
		let href = $(this).attr('href');

		$('html, body').animate({
				scrollTop: $(href).offset().top
		}, {
				duration: 800,
				easing: "linear"
		});

		return false;
	});

	let menuBtn = $('.burger');
	let menu = $('.menu');
	menuBtn.click( function(){
		menu.slideToggle('medium').toggleClass('active');
		$('body').toggleClass("overlay");
		$('.burger--icon').toggleClass('open');
	})

});

document.addEventListener('DOMContentLoaded', () => {
	const section = document.querySelector('.slider');

	section.addEventListener("wheel", (e) => {
		e.preventDefault()

		if(e.scrollY>0 && section.scrollLeft !== (section.innerWidth + section.offsetleft)){
			section.scrollLeft  -= e.deltaY 
		} else {
			section.scrollLeft  += e.deltaY 
		}
	})
});
