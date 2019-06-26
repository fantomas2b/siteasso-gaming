$(function(){
    $('.section1 .header h1').css({opacity: 0, 'padding-left': '-20px'}).animate({opacity: 1, 'padding-left': '20px'}, 500);
    $('.section1 .header p').css({opacity: 0 }).animate({opacity: 1}, 1000);

    // $({someValue: 900}).animate({someValue: Math.floor(Math.random()*(1148-1026+1)+1026) }, {
    $({someValue: 90}).animate({someValue: 100 }, {
        duration: 2000,
        easing:'swing', // can be anything
        step: function() { // called on every step
            // Update the element's text with rounded-up value:
            $('.section1 .connected .number').text(Math.round(this.someValue) + ' +');
        }
    });
});