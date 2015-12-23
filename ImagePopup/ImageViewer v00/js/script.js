
jQuery(function($) {
	
	$("a.topopup").click(function() {
            var currentId = $(this).attr('id');
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(currentId); // function show popup 
			}, 500); // .5 second
	return false;
	});
	
	/* event for close the popup */
	$("div.close").hover(
					function() {
						$('span.ecs_tooltip').show();
					},
					function () {
    					$('span.ecs_tooltip').hide();
  					}
				);
	
	$("div.close").click(function() {
		disablePopup();  // function close pop up
	});
	
	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Ecs' in the keyboard
			disablePopup();  // function close pop up
		}  	
	});
	
	$("div#backgroundPopup").click(function() {
		disablePopup();  // function close pop up
	});
	
	$('a.livebox').click(function() {
		alert('Hello World!');
	return false;
	});
	

	 /************** start: functions. **************/
	function loading() {
		$("div.loader").show();  
	}
	function closeloading() {
		$("div.loader").fadeOut('normal');  
	}
	
	var popupStatus = 0; // set value
	
	function loadPopup(currentId) { 
		if(popupStatus == 0) { // if value is 0, show popup
			closeloading(); // fadeout loading
			$("#toPopup").fadeIn(0500); // fadein popup div
			$("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
			$("#backgroundPopup").fadeIn(0001); 
			popupStatus = 1; // and set value to 1
                        
                         imgcount = 0;
                        $('#thumbList ul li').remove();
                        
                        
                        $.each(imglist[currentId].images, function(key, val) {
                            // alert(val.thumb);
                            if (imgcount == 0) {
                                $("#mainImg").attr('src', val.limage);
                            }

                            // alert(val.limage);
                            $('#thumbList ul').append('<li class="thumbItem" zoom-img="' + val.limage + '" ><img src="' + val.thumb + '"></li>');
                            imgcount++;


                        });
                  
		}	
	}
		
	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
			$("#toPopup").fadeOut("normal");  
			$("#backgroundPopup").fadeOut("normal");  
			popupStatus = 0;  // and set value to 0
		}
	}
	/************** end: functions. **************/
}); // jQuery End