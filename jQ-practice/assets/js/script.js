

$(document).ready(function(){

    // video: 4 basic syntax:               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4
    let a = $('#p').html();
    console.log(a)


    // video: 5 DOM selectors:               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 5
    $('#list').css('color', 'red');

    $('#list li:even').css('border', '1px solid green');

    $('#list li:gt(3)').css('border', '5px solid green');

    $('#list li:lt(3)').css('border', '5px solid grey');

    $('#list li:eq(7)').css('border', '5px solid pink');

    $('#list li').css('margin', '10px 0');

    // $('*').css('border', '2px solid black');

    $('#list').css('padding', '20px');



    // video: 6 Mouse Events:              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 6
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




    // video 7: Keyboard Events:          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 7
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




    // video 8: Form Events:          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 8
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
    $('#form').submit(function(){
        let a = $('#name, #class').val();
        $('#formtest').html(a);
    });

    



















});

