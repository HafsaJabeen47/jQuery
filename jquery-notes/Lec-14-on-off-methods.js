// Video: 14 jQuery on() & off() Method:     ~~~Notes~~~

// NOTE: ye on() and off() method events se related hen.

// agr HTML k aik hi element per hum ne multiple events apply krny hon to alg alg event lgany se code lengthy ho jata hai. so hum on and off method ka use krty hen.




// on() Method:
// how to apply single event using on() method?

// on() single event Method:
$('.on-method-box').on('click', function(){
    $(this).css({'background-color': 'green', 'color': 'white'});
});

// agr ap 2 alg alg events per ame kam krwana chahty hen to usy esy likhen gen. jesy mene mouseover mouseout likha hai.
$('.on-method-box').on('mouseover mouseout', function(){
    $(this).toggleClass('onClass')
});


// how to apply multiple events on one HTML element using jQuery on() method?
// on() multiple events Method:
$('.on-method-box').on({
        'click' : function(){
            $(this).css({'background-color': 'black', 'color' : 'white'});
        },
        'mouseover' : function(){
            $(this).css({'background-color': 'green', 'color' : 'pink'});
        },
        'mouseout' : function(){
            $(this).css({'background-color': 'lightblue', 'color' : 'black'});
        }
});


// off() Method:
// agr ap ne html k element per multiple events lgay hen to ap unko khtam krna chahty hen to us k lye hum off() method ko use krty hen. like jis pe element se events ko rmeove krna ho usy target kr k then .off() me quotation mark me un un events k naam likh den gen jo remove krwany hen or drmyan me space den gen. jesy mene mouseover and mouseout me space di hai.
$('.on-off-method-btn').click(function(){
    $('.on-method-box').off('mouseover mouseout')
});