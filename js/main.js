$(document).ready(function(){
    $('*[data-type="background"]').each(function(){
        var $bgobj = $(this); // создаем объект
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
            // Присваиваем значение background-position
            var coords = 'center '+ yPos + 'px';
            // Создаем эффект Parallax Scrolling
            $bgobj.css({ backgroundPosition: coords });
        });
    });

    $('.js-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    $('.js-down').click(function () {
        $('body, html').animate({
            scrollDown: 400
        }, 1500);
        return false;
    });

    // $('img[src="./img/about1.jpg"]').click (function () {
    //     $('.about__title').html('About me');
    //     $('.about__p-1').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. ');
    //     $('.about__p-2').html('Crferm entum  quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at. ');     
    //     return false;
    // });


    // $('img[src="./img/about2.jpg"]').click (function () {      
    //     $('.about__title').html('About you');
    //     $('.about__p-1').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, minima.');
    //     $('.about__p-2').html('Lorem ipsum dolor sit amet.');        
    //     return false;
    // });    

    // $('img[src="./img/about3.jpg"]').click (function () {     
    //     $('.about__title').html('About us');
    //     $('.about__p-1').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, quasi.');
    //     $('.about__p-2').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ducimus optio neque non eum eaque blanditiis reprehenderit deserunt odit culpa..');       
    //     return false;
    // });
 

});