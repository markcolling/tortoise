$(document).ready(function(){
    
    fixHeights();
    columnWidthChange();
    
  /*var $container = $('#posts');//Put this in teh function below and change columnwidth to be equal to module height
    // initialize
    $container.masonry({
      columnWidth: 195,
      itemSelector: '.item'
    });*/

    $(window).on("resize",function(){
        
        fixHeights();
        columnWidthChange();
        
        
    });
});

function fixHeights(){

    var module_height = $( ".grid-sizer" ).width();
    module_height = Math.ceil(module_height);
    var module_height2 = (module_height*2)+16;
    
    $( ".cell" ).each(function( index ) {
        
        //set the height equal to the width
        var cw = $(this).width();
        cw = Math.ceil(cw);
        
        $(this).css({'height':module_height+'px'});
        /*var ch = $(this).height();
        $(this).html(cw + 'wide x ' + ch);*/
    });
    
    $( ".cellb" ).each(function( index ) {
        
        $(this).css({'height':module_height2+'px'});

        
    });

        $("#googlemaps" ).css({'height':module_height2+'px'});
        $("#googlemaps" ).css({'width':module_height2+'px'});
};
    
function columnWidthChange(){

    $("#posts").masonry({
        itemSelector: '.item',
        gutter:0,
        isFitwidth:true,
        columnWidth:'.grid-sizer'
    }); 
};


