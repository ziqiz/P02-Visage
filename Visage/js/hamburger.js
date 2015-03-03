$(".document").ready(
	function(){
		console.log("hamburger.js loaded successfully");
		var width = $(window).width();
		console.log("page width: " + width);
		
		if(width <= 960){
			$("#sideNav").hide();
			$(".nav-toggle").show();
		}else{
			$(".nav-toggle").hide();
			$("#sideNav").show();
			console.log("enterElse");
		}
		
		$(".nav-toggle").click(
			function(){
					$("#sideNav").slideToggle(800);
				
			}	
		);	
	}
);

