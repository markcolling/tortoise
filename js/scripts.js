$(document).ready(function () {
   
    $("#posts").masonry({
        itemSelector: '.cell',
        gutter:0,
        isFitwidth:true,
        columnWidth:'.grid-sizer'
    }); 
    
});
