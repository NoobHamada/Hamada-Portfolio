$(document).ready(function () {
    $("#whatsNum").hide()

    $("#revealProj").one('click', function () {
        $("#info").animate({
            top: '50px'
        }, 200)
    })
    
    $("#contact").click(function() {
        $("#whatsNum").slideToggle(500)
    })

    $("aside").click(function() {
        $(this).children().toggle()
    })
})