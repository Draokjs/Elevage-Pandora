// Animate nav bar
$ (".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
})