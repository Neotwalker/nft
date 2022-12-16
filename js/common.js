$(function() {

	$('.marquee').marquee({
		duration: 24000,
		startVisible: true,
		duplicated: true
	});

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
	// $('.burger').click(function () {
	// 	$('.menu').slideToggle('medium');
	// });

});

// let element = document.querySelector('.slider');
// let cnt = 0

// document.addEventListener('wheel', function(event){
// 	event = event || window.event;
// 	let y = event.deltaY || event.detail || event.wheelDelta, val=0.1, min = 0, max=0;
// 	if(y > 0){
// 			cnt = cnt - 20;
// 			element.style.transform = 'translate(' + cnt + '%)'
// 	}
// 	if(y < 0){
// 			cnt = cnt + 20;
// 			element.style.transform = 'translate(' + cnt + '%)'
// 	}
// });

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
