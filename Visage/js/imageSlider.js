$(document).ready(function() {
	//code reference: http://www.designchemical.com/blog/index.php/jquery/jquery-image-swap-gallery/
    // Image swap on hover
    $("#gallery li img").hover(function(){
        $('#mainImg').attr('src',$(this).attr('src').replace('thumb/', ''));
		
		var currentImg = $("#mainImg").attr('src');
		console.log(currentImg);
		var image1 = 'img/slide1.jpg';
		var image2 = 'img/slide2.jpg';
		var image3 = 'img/slide3.jpg';
		
		if(currentImg === image1){
			console.log("enterA");
			$("#target").attr("href", "blogPost1.html");
		}else if(currentImage === image2){
			console.log("enterB");
			$("#target").attr("href", "shopProduct3.html");
			
		}else{
			console.log("enterC");
			$("#target").attr("href", "shopProduct2.html");
		}
    });
    // Image preload
    /*var imgSwap = [];
     $("#gallery li img").each(function(){
        imgUrl = this.src.replace('thumb/', '');
        imgSwap.push(imgUrl);
    });
	
    $(imgSwap).preload();*/
	
	//changing url
	
	
});

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
