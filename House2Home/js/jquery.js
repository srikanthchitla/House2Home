  $(function () {
      $("#accordion").find('.pane').css( "display", "none" );     
    $("#accordion li").click(function () {
        $(this).next(".pane").slideToggle(500).siblings(".pane:visible").slideUp(500);
        $(this).toggleClass("current");
        $(this).siblings("li").removeClass("current");
    });
});