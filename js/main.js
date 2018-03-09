// JavaScript Document
/*====================================================
 ================ TIME SCRIPT IS HERE =============
 =====================================================*/

							function renderTime() {
															var currentTime = new Date();
															var diem = "AM";
															var h = currentTime.getHours();
															var m = currentTime.getMinutes();
															var s = currentTime.getSeconds();
															setTimeout('renderTime()', 1000);
															if (h == 0) {
																h = 12;
															} else if (h > 12) {
																h = h - 12;
																diem = "PM";
															}
															if (h < 10) {
																h = "0" + h;
															}
															if (m < 10) {
																m = "0" + m;
															}
															if (s < 10) {
																s = "0" + s;
															}
															var myClock = document.getElementById('clockDisplay');
															myClock.textContent = h + ":" + m + ":" + s + " " + diem;
															myClock.innerText = h + ":" + m + ":" + s + " " + diem;
														}
														renderTime();
														
														
/*====================================================
 ================ TIME SCRIPT IS HERE =============
 =====================================================*/														
	$(document).ready(function() {
	 $("html").niceScroll({
	  scrollspeed: 100,
	  autohidemode:false,
	 });
	 //SCROLL FOR TABLE PRO DETAILS
	 $(".sold_seller_nice").niceScroll({
	  scrollspeed: 100,
	 });
 });													
														
														

 $(document).ready(function() {
		  $("#slider_portion").owlCarousel({
		    navigation : true,
        navigationText : ["", ""],
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem : true,
		  pagination : true,
		  autoPlay: true,
		  // "singleItem:true" is a shortcut for:
		  // items : 1, 
		  // itemsDesktop : false,
		  // itemsDesktopSmall : false,
		  // itemsTablet: false,
		  // itemsMobile : false
	
		  });
	/*=========== OWL SLIDER ===============*/
	var owl = $("#top_brand");

      owl.owlCarousel({
          items : 4,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 5],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 800,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : true,
        stopOnHover : false,

        navigation : true,
        navigationText : ["", ""],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

      });
	  
    });
 
 /*====================================================
 ================ TIME SCRIPT IS HERE =============
 =====================================================*/


	$('#foo2').carouFredSel({

					//auto: false,

					prev: '#prev2',

					next: '#next2',

					pagination: "false",

					mousewheel: true,
                    
					mouseenter:'true',
					  
					direction: 'up',

					auto : 'true',
				

					swipe: {

						onMouse: true,
                   
						onTouch: true

					}

				});
	
				$('#f001').carouFredSel({

					//auto: false,

					prev: '#prev1',

					next: '#next1',

					pagination: "false",

					mousewheel: true,
                    
					mouseenter:'true',
					  
					direction: 'up',

					auto : 'true',
				

					swipe: {

						onMouse: true,
                   
						onTouch: true

					}

				});


			$('#f003').carouFredSel({

					//auto: false,

					prev: '#prev3',

					next: '#next3',

					pagination: "false",

					mousewheel: true,
                    
					mouseenter:'true',
					  
					direction: 'up',

					auto : 'true',
				

					swipe: {

						onMouse: true,
                   
						onTouch: true

					}

				});
