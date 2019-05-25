$(document).ready(function(){
  $('.parallax').parallax();
  $('select').formSelect();
  $('.modal').modal();
});

// on click button here

$("#navAbout").click(function() {
  $('html,body').animate({
      scrollTop: $("#bgContain").offset().top},
      'slow');
});

$("#navStarted").click(function() {
$('html,body').animate({
    scrollTop: $("#bgContain-2").offset().top},
    'slow');
});

$("#navFind").click(function() {
$('html,body').animate({
    scrollTop: $("#bgContain-5").offset().top},
    'slow');
});

