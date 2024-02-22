$('.top').click(function(){
    $('html,body').animate({
        scrollTop:0
    },800)
});


// $('.section3').find('.row').attr("data-aos","fade-up");


    // 화면 크기가 변경될 때마다 AOS 속성 업데이트
    // $(window).on('resize', function() {
    //   updateAOS();
    // });

    // function updateAOS() {
    //   const elements = $('[data-aos]');
    //   const isMobile = window.innerWidth <= 768;
    //   const aosValue = isMobile ? 'fade-up' : 'fade';

    //   elements.attr('data-aos', aosValue);
    //   AOS.refresh();
    // };
    // updateAOS();