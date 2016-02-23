/**
 * 
 */

$(document).ready(function(){
	$("p").on({
	    mouseenter: function(){
	        $(this).css("background-color", "lightgray");
	    },
	    mouseleave: function(){
	        $(this).css("background-color", "lightblue");
	    },
	    click: function(){
	        $(this).css("background-color", "yellow");
	    },
	    rightclick: function(){
	    	$(this).css("background-color", "red");
	    },
	    dblclick: function(){
	    	$(this).css("background-color", "white");
	    }
	});
})