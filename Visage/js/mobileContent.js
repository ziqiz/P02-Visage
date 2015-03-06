$(".document").ready(
	function(){
		console.log("hamburger.js loaded successfully");
		var width = $(window).width();
		console.log("page width: " + width);
		
		if(width <= 960){
			$("nav").insertAfter("header");
			$("#siteSearch").hide();
			$("nav ul ul").css("display","none");
			$("header").css("padding-left","40%");
			$("nav").css("margin-bottom", "1em");
			
		}
		
		if(width <= 680){
			$("#gallery").hide();
			$("#mobileGallery").show();
			
		}else{
			$("#mobileGallery").hide();
			
		}
		
		
	}
);

