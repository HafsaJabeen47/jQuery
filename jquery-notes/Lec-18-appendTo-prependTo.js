// Video: 18 jQuery appendTo & prependTo Method:     ~~~Notes~~~



// appendTo and prependTo are similar to append and prepend. bs in me frq ye hai k hum append/prepend me $() k bad HTML kselector ko target krty thy. then append/prepend me content add krty thy. lekn appendTo/prependTo me pehly hum $() me content add krty hen or bad me HTML k selector ko add krty hen.
$('<p> hello world </p').appendTo('#box');




// prepenTo()
$(content).prependTo(selector)
$('<p> Hello world </p>').prependTo('#box')

// prepend()
$(selector).prepend(content)
$('#box').prependTo('<p> Hello world </p>')





// busy schedule