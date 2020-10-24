$(document).ready(function(){
    $(".navbar-toggler, .overlay").on("click", function(){
        $(".sideNav, .overlay").toggleClass("open");
    })
});


function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
} 
$(window).scroll(function(){
    $('nav') .toggleClass('scrolled',$(this).scrollTop()>50);
});