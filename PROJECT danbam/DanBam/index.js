const imageCount = $(".images1").length;
const imageWidth = $(".images1").width();
const imageHeight = $(".images1").height();
const totalWidth = imageCount * imageWidth;

$("#image-slider").css({
    width: imageWidth,
    height: imageHeight
})
$("#slider").css({
    width: totalWidth,
    marginLeft: -imageWidth
})
$(".images1:last-child").prependTo("#slider")

$("#prev").click(function(){
// $("#slider").animate({
//     left: imageWidth
// },1000, function(){
//     $(".images1:last-child").prependTo("#slider")
//     $("#slider").css({
//         "left":""
//     })
// })
$("#slider").fadeOut(1000, function() {
        $(".images1:last-child").prependTo("#slider")
        $("#slider").css({
            left: imageWidth})
        $("#slider").fadeIn(1000)
    })

})

$("#next").click(function(){
    // $("#slider").animate({
    //     left: -imageWidth
    // }, 1000, function() {
    //     $(".images1:first-child").appendTo("#slider")
    //     $("#slider").css({
    //         "left": ""
    //     })
    // })
    $("#slider").fadeOut(1000, function() {
        $(".images1:first-child").appendTo("#slider")
        $("#slider").css({
            left: -imageWidth})
        $("#slider").fadeIn(1000)
    })
})