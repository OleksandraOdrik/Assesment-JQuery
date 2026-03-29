$(document).ready(function() {
	$(".border-btn").on("click", function(){
        $(this).toggleClass("active-border"); 
    	});
	 $(".toggle-btn").click(function(){
	// 	 $(this).prev()find("p").slideToggle("slow");
		 
        $(this).prev().slideToggle("slow"); 
	});
	
	$("#favColor").click(function(){
		//$(this).val("");
		});
		
		$("#submitColor").click(function(){
			var color= $("#favColor").val();
			
		$("#output").append("<p>Your favourite colour is " + color +".</p>");
		
		$("body").css("background-color", color);
	  	});
			  	});
