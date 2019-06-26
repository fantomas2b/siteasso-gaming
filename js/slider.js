$(document).ready( function () {

    $('.button').css({
     '-webkit-transform': 'rotate(0deg)',
     'transform': 'rotate(0deg)'
    });
    $("#container_partner .content").hide();
    $(".container .content").hide();

    $(".header_container").click( function () {
      console.log('click');
      var content = $(this).parent().find(".content");
      var button = $(this).parent().find(".button");

        if ($(this).parent().find(".content:visible").length != 0) {
          $(this).parent().find(".content").slideUp(400);
          $(button).css({
           '-webkit-transform': 'rotate(0deg)',
           'transform': 'rotate(0deg)'
          });
      } else {
          $(content).slideDown(400);

          $(button).css({
            'transition-property': 'transform',
            'transition-duration': '400ms',
            'transition-timing-function': 'ease',
            '-webkit-transform': 'rotate(90deg)',
            'transform': 'rotate(90deg)'
          });
      }
    });
});
