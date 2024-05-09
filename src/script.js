
function openCard(cardId){
    $(cardId).addClass("card-full").css("width", "50%");
    $(".container-cards > " + cardId + " > .text-box > .hidden-content").css({"max-height": "100%", "display": "block"});
}


function closeCard(cardId){
    $(".container-cards > " + cardId + " > .text-box > .hidden-content").css({"max-height": "0%", "display": "none"});
    $(cardId).removeClass("card-full").css("width", "40%");
}

function onClickCard(btnId, cardId){
    if($(btnId).text() == "More"){
        $(btnId).text("Less");
        openCard(cardId);
    }else{
        $(btnId).text("More");
        closeCard(cardId);
    }
}


$("#btn-aboutme").on("click", function(){
    onClickCard("#btn-aboutme", "#card-aboutme");
});

$("#btn-projects").on("click", function(){
    onClickCard("#btn-projects", "#card-projects");
});



