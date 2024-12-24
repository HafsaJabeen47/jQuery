

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
    


    



















});

