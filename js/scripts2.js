$(document).ready(function(){
    
    lastScrollY     = 0,
    ticking         = false;
    
    centreName();
    menuClick();
    
    // only listen for scroll events
    window.addEventListener('scroll', onScroll, false);
    
    $(window).on("resize",function(){
        centreName();
    });    
    
    $(document).on("mobileinit", function(){
        $.mobile.touchOverflowEnabled = true;
    });
    
    /**
     * Callback for our scroll event - just
     * keeps track of the last scroll value
     */
    function onScroll() {
        lastScrollY = window.scrollY;
        requestTick();
    }

    /**
     * Calls rAF if it's not already
     * been done already
     */
    function requestTick() {
        if(!ticking) {
            requestAnimationFrame(parallaxScroll);
            ticking = true;
        }
    }
    });

function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        var scrolled0 = scrolled*0.8; 
        var scrolled1 = scrolled*0.6;
        var scrolled2 = -scrolled*0.3;
        var scrolled3 = -scrolled*0.7;
    
        document.getElementById("layer0").style.webkitTransform ='translateY(' + scrolled0 + 'px)';
        document.getElementById("layer1").style.webkitTransform ='translateY(' + scrolled1 + 'px)';
        document.getElementById("layer2").style.webkitTransform ='translateY(' + scrolled2 + 'px)';
        document.getElementById("layer3").style.webkitTransform ='translateY(' + scrolled3 + 'px)';
       
        centreName();
        // allow further rAFs to be called
        ticking = false;
    };
function centreName(){
    var scrolled = $(window).scrollTop();
    var scrolledMC = ($("#titleCanvas").height()-scrolled)/2 + scrolled;
    if (scrolledMC > ($("#titleCanvas").height()-($('h1').height()/2))) {
        scrolledMC = $("#titleCanvas").height()-($('h1').height()/2);
    };
    $("h1").css('top', scrolledMC + 'px'); 
};

function menuClick(){
  $('li').click(function(){
        
        $(this).children('p').slideToggle();
        $(this).siblings().children('p').slideUp();
    
        var offset = $(this).offset();

      $('html, body').animate({
        scrollTop: offset.top
      });
      
    });  
};

/**
 * Callback for our scroll event - just
 * keeps track of the last scroll value
 */
function onScroll() {
    lastScrollY = window.scrollY;
    requestTick();
}

/**
 * Calls rAF if it's not already
 * been done already
 */
function requestTick() {
    if(!ticking) {
        requestAnimationFrame(update);
        ticking = true;
    }
}
$(function(){	

        var $window = $(window);
	var scrollTime = 1.2;
	var scrollDistance = 170;

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5							
			});

	});
});
