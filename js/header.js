$('#menu .onglets').hover(function() {
  $(this).css("background", "#1D5981");
  $(this).css("color", "white");
});

$('#menu li').mouseleave(function() {
  var onglets = $(this).parent().parent().find('.onglets');
  onglets.css("background", "none");
  onglets.css("color", "#1D5981");
});

$('#menu li li').mouseenter(function() {
  var onglets = $(this).parent().parent().find('.onglets');
  onglets.css("background", "#1D5981");
  onglets.css("color", "white");
});

$('#svg_menu').click(function() {
  console.log('open');
  $('body').css('overflow', 'hidden');
});

$('#svg_cross').click(function() {
  console.log('close');
  $('body').css('overflow', 'scroll');
});


$('#menu li a').click(function() {
  if($(this).attr("href") == "#") {
    return false;
  }
});

var content = $('#menu');
var sidebar = $('#menu-sidebar');
var sidebarBody = $('#menu-sidebar-body');
var sidebaeHeader = $('#menu-sidebar-header');
var button = $('#icon_menu');
var overlay = $('#menu-overlay');
var enTete = $('#en_tete');

sidebarBody.html('<ul id="menu">'  + content.html() + '</ul>');
sidebaeHeader.html(''  + enTete.html() + '');

button.click(function() {
  sidebar.addClass("activated");
  overlay.css('display', 'block');
});

overlay.click(function() {
  sidebar.removeClass("activated");
  overlay.css('display', 'none');
});
