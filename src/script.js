$(window).on("scroll", function(){
    $(".hidden").each(function(){
        //top element y position
        var elementTop = $(this).offset().top;
        //bottom window y position
        var windowBottom = $(window).scrollTop() + $(window).height();

        //if top element y < bottom window y then, the element is visible/you scrolled at the element
        if(elementTop < windowBottom - 100){
            //fade in effect
            $(this).addClass("fade").removeClass("hidden");
        }
    });
});