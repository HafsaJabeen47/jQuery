

$(document).ready(function(){

    // video: 4 basic syntax:               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4
    let a = $('#p').html();
    console.log(a)


    // video: 5 DOM selectors:               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 5
    $('#list').css('color', 'red');

    $('#list li:even').css('border', '1px solid green');

    $('#list li:gt(3)').css('border', '5px solid green');

    $('#list li:lt(3)').css('border', '5px solid grey');

    $('#list li:eq(7)').css('border', '5px solid pink');

    $('#list li').css('margin', '10px 0');

    // $('*').css('border', '2px solid black');

    $('#list').css('padding', '20px');



    // video: 6 Mouse Events:              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 6
    // click()
    $('.box').click(function(){
        $('.box').css('background-color', 'green');
            $('.box').css('color', 'white');
                // let a = $('.box').html();
                // console.log(a);

    });

    // dblclick()
    $('.box').dblclick(function(){
        $('.box').css('background-color', 'orange');
        $('.box').css('color', 'black');
    });

    // contextmenu()
    $('.box').contextmenu(function(){
        $('.box').css('background-color', 'blue');
        $('.box').css('color', 'white');
    });

    // mouseenter()
    $('.box').mouseenter(function(){
        $('.box').css('background-color', 'tan');
        $('.box').css('color', 'black');
    });

    // mouseleave()
    $('.box').mouseleave(function(){
        $('.box').css('background-color', 'cadetblue');
        $('.box').css('color', 'white');
    });




    // video 7: Keyboard Events:          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 7
    // keypress()
    $('body').keypress(function(){
        $(this).css('background-color', 'orange');
    });

    // keyup()
    $('body').keyup(function(){
        // $(this).css('background-color', 'green');
    });

    // keydown()
    $('body').keydown(function(){
        // $(this).css('background-color', 'grey');
    });




    // video 8: Form Events:          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 8
    // focus()
    $('#name, #class, #country, #formbtn').focus(function(){
        $(this).css('background-color', '#cbd1ca');
        $(this).css('border', '1px solid green');
        $(this).css('border-radius', '3px');
    });

    // blur()
    $('#name, #class, #country, #formbtn').blur(function(){
        $(this).css('background-color', '');
        $(this).css('border', '1px solid green');
        $(this).css('border-radius', '3px');
    });

    // change()
    $('#country ').change(function(){
        $(this).css('background-color', 'pink');
        $(this).css('border', '1px solid green');
        $(this).css('border-radius', '3px');

        let a = $(this).val();
        $('#formtest').html(a);
    });


    // select()
    $('#name, #class').select(function(){
        $(this).css('background-color', 'yellow');
        $(this).css('border', '1px solid green');
        $(this).css('border-radius', '3px');
    });


    // submit()
    $('#form').submit(function(e){
        e.preventdefault();
        let a = $('#name, #class').val();
        $('#formtest').html(a);
    });




    // video 9: Window Events:          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 9
    // scroll()
    $(window).scroll(function(){
        console.log('This is scrolling window event');
    });


    // resize()
    $(window).resize(function(){
        console.log('This is resizing window event');
    });




    // video 10: jQuery Get Methods:          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 10
    // html()
    let box = $('#getbox').html();
    console.log(box);

    // text()
    let textBox = $('#getbox p').text();
    console.log(textBox);

    // attr()
    let getAttr = $('#getbox').attr('class');
    console.log(getAttr);

    // val()




    // video 11: jQuery Set Methods:          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 11
    // text()
    $('#setBtn').click(function(){
        $('#getbox h2').text('Hello World!');
        $('#getbox p').text('This is new text.');
        // html()
        $('#getbox p').html('This <b>is new</b> text.');

        // attr()
        $('#getbox h2').attr('class', 'red');
        // val() iski mjy know how hai. so mene practice nahi kia.
    });



    // video 12: jQuery addClass & removeClass Method:          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 12
    // addClass()
    $('#add-class').click(function(){
        $('.add-remove-class').addClass('first red');
    });

    // removeClass()
    $('#remove-class').click(function(){
        $('.add-remove-class').removeClass('first red');
    });

    // toggleClass()
    $('#toggle-class').click(function(){
        $('.add-remove-class').toggleClass('first red');
    });




    // video 13: jQuery CSS() Method:          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 13
    // is treqy yani parentheses me aik css apply hoti hai agr hum ne multiple css properties apply krni hen to us k lye hum curly braces ka use kren gen wo me nechy alg se kr k dekhati hun.
    // round braces yani k pranthese for single property:
    $('.css-method-btn').click(function(){
        $('.css-method-box').css('background-color', 'pink');
    });

    // curly braces for multiple css properties:
    $('.css-method-btn').click(function(){
        $('.css-method-box').css({'background-color': 'pink', 'font-size': '22px', 'color': 'green', 'border': '5px dotted red'});
    });




    // video 14: jQuery on() & off() Method:          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 14
    // on() single event Method:
    $('.on-method-box').on('click', function(){
        $(this).css({'background-color': 'orange', 'color': 'white'});
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
    $('.on-off-method-btn').click(function(){
        $('.on-method-box').off('mouseover mouseout')
    });




    



















});

