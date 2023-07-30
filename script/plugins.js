$(document).ready(function () {
    $("#revealProj").one('click', function () {
        $("#info").animate({
            top: '50px'
        }, 200)
    })
    
    console.log($('main').offset())
})