// Video: 07 jQuery Keyboard Events:     ~~~Notes~~~


// KEYBOARD EVENTS:
// keypress()
// keydown()
// keyup()

// key press and key down work same.

// for example:
// keypress()
$('body').keypress(function(){
    $(this).css('background-color', 'orange');
});

// keyup()
$('body').keyup(function(){
    $(this).css('background-color', 'green');
});

// keydown()
$('body').keydown(function(){
    $(this).css('background-color', 'black');
});