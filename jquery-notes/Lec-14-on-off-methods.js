// Video: 14 jQuery on() & off() Method:     ~~~Notes~~~

// NOTE: ye on() and off() method events se related hen.

// agr HTML k aik hi element per hum ne multiple events apply krny hon to alg alg event lgany se code lengthy ho jata hai. so hum on and off method ka use krty hen.




// on() Method:
// how to apply single event using on() method?

// on() single event Method:
$('.on-method-box').on('click', function(){
    $(this).css({'background-color': 'green', 'color': 'white'});
});

