$(document).ready(function () {

	var x = document.getElementById("contain");
	
	x.addEventListener("click", myFunction);
	
	function myFunction() {
	  var element = document.getElementById("nav");
	  element.classList.toggle("open");
	
	  x.classList.toggle("change");
	}

	$('.myLinkModal').click(function(e) {
		e.preventDefault()
		target = '#' + $(this).attr('data-id')
		// $(target).toggleClass('hidden')
		$(".myOverlay").fadeIn(200, function () {
			$(target).css("display", "block").animate({ opacity: 1 }, 198);
		  });
		
		  $(".popup-close,.myOverlay").click(function () {
			$(this).parents(target).fadeOut(30);
			$(".myOverlay").fadeOut(30);
			return false;
		  });
	  })
	  
	//   $('.myOverlay').click(function() {
	// 	if (!$(this.target).is('.myModal')) {
	// 	  $(".myModal").fadeOut(30);
	// 	}
	//   });

});	