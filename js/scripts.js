$(document).ready(function(){
    
    centreName();

  $('li').click(function(){
        
        $(this).children('p').slideToggle();
        $(this).siblings().children('p').slideUp();
    
        var offset = $(this).offset();

      $('html, body').animate({
        scrollTop: offset.top
      });
      
    });  
    
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
        centreName();
    });
    
    $(window).on("resize",function(){
        centreName();
    });
    

    $(document).on("mobileinit", function(){
        $.mobile.touchOverflowEnabled = true;
    });
});

function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        var scrolled0 = scrolled*1.3; 
        var scrolled1 = scrolled*0.8;
        var scrolled2 = scrolled*0.3;
        var scrolled3 = -scrolled*0.3;
    
        document.getElementById("layer0").style.webkitTransform ='translate3d(0px, ' + scrolled0 + 'px, 0px)';
        document.getElementById("layer1").style.webkitTransform ='translate3d(0px, ' + scrolled1 + 'px, 0px)';
        document.getElementById("layer2").style.webkitTransform ='translate3d(0px, ' + scrolled2 + 'px, 0px)';
        document.getElementById("layer3").style.webkitTransform ='translate3d(0px, ' + scrolled3 + 'px, 0px )';
  
    };
function centreName(){
    var scrolled = $(window).scrollTop();
    var scrolledMC = ($("#titleCanvas").height()-scrolled)/2 + scrolled;
    if (scrolledMC > ($("#titleCanvas").height()-($('h1').height()/2))) {
        scrolledMC = $("#titleCanvas").height()-($('h1').height()/2);
    };
    $("h1").css('top', scrolledMC + 'px'); 
};