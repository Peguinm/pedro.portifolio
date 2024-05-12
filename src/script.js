
activeSection = (sectionId) =>{
    $("#section-aboutme").css("display", "none");
    $("#section-projects").css("display", "none");

    $(sectionId).css("display", "block");
    $("html, body").animate({
        scrollTop : $(sectionId).offset().top
    }, 500);
}

$("#btn-aboutme").on("click", function(){
    activeSection("#section-aboutme")
});

$("#btn-projects").on("click", function(){
    activeSection("#section-projects")
});



