// Video: 05 jQuery DOM Basic and Advance Selectors:     ~~~Notes~~~


// BASIC SELECTORS:
// Targeting DOM elements with ID, Class & Tag
// select by ID: $('#idName');
// select by CLASS: $('.className');
// select by TAG: $('tagName');
// these 3 selectors are known as basic selectors in jQuery.


// Note: selectors applied in jQuery like in CSS we applied to appling css on specific html elements using id, class, and tag name.



// ADVANCE SELECTORS:
// $('*')        .........it works like universal selector in css.
// $('ul li')    ........this is known as parent and child selectors
// $('.abc , .xyz')   ......to work on multiple classes at a time we use comma to separate them.
// $('h1, div, p')    .....to work on multiple tags or elements at a time we write them using comma.


// $('p:first')      ....this is a pseudo class mtlab html k pury page me jo sab se pehla p tag ho ga usy targe krny k lye p k bad colon sign k sath first likhen gen.

// $('p:last')         ....isi tran pury page pe sab se last wala tag target krny k lye last likhen gen.

// Note: p:first-child and p:last-child ye UL me se jo pehla or akhri ho ga usy target kry ga jabfirst k sath child ka word ajay to.


// $('li:even')    ...... jitny b li even number pe hen unko target krny k lye use hota.
// $('li:odd')   ..... jitny b li odd number pe hen unko target krny k lye use hota.


// IMPORTANT POINT REGARDING CSS AND JS ALSO
// eq()      ... pura lafz hai equation......used to target specific li.
// gt()      ... pura lafz greater than.....used to target greater than given number. like agr gt(2) hai to
// 2 se agy waly li ko target kry ga.
// lt()   ...pura lafz less than.....sed to target less than given number. like agr gt(3) hai to
// 3 se pehly waly li ko target kry ga.





// IMPORTANT NOTE:
// agr mjy list me se apni mrxi ka koi specific li ko target krna hai to us k lye equation aik css ka step hai jisy hum youn likhen gen: $('ul li:eq(2)); eq() k ander hum apna target index number add kren gen kisi specific li ko target krny k lye.
