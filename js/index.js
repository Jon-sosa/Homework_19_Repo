$(".myImg").on("click", function() {
  $(".myImg").animate({ width: "500px" });
});


$(".accordian1").on("click", function(){
    // $(".toggleMe").toggle();
    $(".toggleMe1").slideToggle();
});

$(".accordian2").on("click", function(){
    // $(".toggleMe").toggle();
    $(".toggleMe2").slideToggle();
});  

document.querySelector('.heroContent button').addEventListener('click', function() {
    console.log('Resume download button clicked.');
    window.open('#', '_blank');
});

