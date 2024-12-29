// Video: 16 jQuery Before & After Method:     ~~~Notes~~~



// before and after are similar to prepend and append. before and after work outside the element. and append & prepend work inside the HTML element.


// before()
$('.before-method-btn').click(function(){
    $('.append-method-box').before('<h4> Hello! Using jQuery Before Method: </h4> ')
});




// after()
$('.after-method-btn').click(function(){
    $('.append-method-box').after('<h4> Hello! Using jQuery After Method: </h4> ')
});


// NOTE: we can add multiple elements using append/prepend/before/after.
$('.after-method-btn').click(function(){
    $('.append-method-box').after('<h4> Hello! Using jQuery After Method: </h4><p> hello this is paragraph </p> ')
});
