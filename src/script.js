
activeSection = (sectionId) =>{
    $(sectionId).css("display", "block");
}

$("#btn-aboutme").on("click", function(){
    activeSection("#section-aboutme")
});

$("#btn-projects").on("click", function(){
 
});



