// Video: 13 jQuery CSS() Method:     ~~~Notes~~~

// CSS Methods:


// How to apply inline css using jQuery on HTML elements?
// we use CSS() method to apply inline css using jQuery.


// How to use CSS() method?
// // is treqy yani parentheses me aik css apply hoti hai agr hum ne multiple css properties apply krni hen to us k lye hum curly braces ka use kren gen wo me nechy alg se kr k dekhati hun.

// round braces yani k pranthese for single property:
$('.css-method-btn').click(function(){
        $('.css-method-box').css('background-color', 'pink');
});

// curly braces for multiple css properties:
$('.css-method-btn').click(function(){
    $('.css-method-box').css({'background-color': 'pink', 'font-size': '22px'});
});
// Note: curly braces me comma use nahi ho ga uski bjay hun colon ka use kren gen.
// dusri valye dene k lye jahan curly braces cloe hoti hai us k bad comma apply kren gen then quotation mark me css properties apply kren gen. jesy mene opar kia hai.