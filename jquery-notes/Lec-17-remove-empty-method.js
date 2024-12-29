// Video: 17 jQuery Remove & Empty Method:     ~~~Notes~~~


// empty()
// agr HTML k element se content ko khtam krna ho to us k lye jQuery ka aik method hai empty() is se hum content ko khtam kr skty hen.
$('.empty-method-btn').click(function(){
    $('.remove-empty-method-box').empty()
});




// remove()
// agr hum ne HTML k element ko remove krna ho to us k lye hmary pass jQuery ka aik method hai remove() is se hum HTML k element ko remove kr skty hen.
$('.remove-method-btn').click(function(){
    $('.remove-empty-method-box').css('background-color', 'cadetblue')
    $('.remove-empty-method-box').remove()
});


// NOTE: hum kisi specific aik tag ko b target kr skty hen jesy hum normal css ki file me specific element ko target krny k lye #box h2{} ko select krty thy thek wse hi edr b krna hai.
$('.remove-method-btn').click(function(){
    $('.remove-empty-method-box').css('background-color', 'cadetblue')
    $('.remove-empty-method-box h3').remove()
});