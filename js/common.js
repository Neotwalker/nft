$(function() {

	// $('.marquee').marquee({
	// 	duration: 24000,
	// 	startVisible: true,
	// 	duplicated: true
	// });

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
})