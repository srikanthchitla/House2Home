  $(function () {
      $("#accordion").find('.pane').css( "display", "none" );     
    $("#accordion li").click(function () {
        $(this).next(".pane").slideToggle(500).siblings(".pane:visible").slideUp(500);
        $(this).toggleClass("current");
        $(this).siblings("li").removeClass("current");
    });
});

  $(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        
        $('#back-to-top').tooltip('show');


       

});

