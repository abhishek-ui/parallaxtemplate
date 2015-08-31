$(document).ready(function(){
				 //wow JS Script
				 wow = new WOW(
					{
					  boxClass:     'wow',      // default
					  animateClass: 'animated', // default
					  offset:       0,          // default
					  mobile:       true,       // default
					  live:         true        // default
					}
				  )

				 new WOW().init();
				 
				 //Animation js
				 $(".link-icons li").hover(
				  function(){
						$(this).find("img").addClass("animated fadeInDown");
						$(this).find("span").addClass("animated fadeInUp");
					},
					function(){
						$(this).find("img").removeClass("animated fadeInDown");
						$(this).find("span").removeClass("animated fadeInUp");
					}
				  );
				  
				  //MENU JS
				  $(".menuToggle").click(function(){
					$("body").addClass("is-menu-visible");
					$("#menu ul").addClass("animated bounceInUp");
				  });
				  $(".close").click(function(){
					$("body").removeClass("is-menu-visible");
					$("#menu ul").removeClass("animated bounceInUp");
				  });
				  $(".home-container").click(function(){
					$("body").removeClass("is-menu-visible");
					$("#menu ul").removeClass("animated bounceInUp");
				  });
				  
				  //PARALLAX JS
				  $('section[data-type="background"]').each(function(){
					var $bgobj = $(this); // assigning the object
    
					$(window).scroll(function() {
					var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
					
					// Put together our final background position
					var coords = '50% '+ yPos + 'px';

					// Move the background
					$bgobj.css({ backgroundPosition: coords });
					}); 
				  });
				/*function parallaxScroll(){
					var blockCount = $('.scroll-slider').length;
					var clickCount = 1 
					alert(blockCount);
					
					  $(".clicK").click(function(){
						$('body').addClass("ss");
						for(clickCount = 1; clickCount <= blockCount; clickCount++){						
							$(".ss .scrolly").css({"transform": "translate3d(0px, -100vh , 0px)"});
						}
						alert(clickCount);
					  });
					  
					};
				  parallaxScroll()*/
				
			 });