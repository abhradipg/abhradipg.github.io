
window.onload = function () {
var expand_button = document.getElementById("expand");
var collapse_button = document.getElementById("collapse");
var expand_div = document.getElementsByClassName("head1_e");
var collapse_div = document.getElementsByClassName("head1_c");
expand_div[0].style.display="none";

collapse_button.addEventListener("click",function(evt){
    collapse_div[0].style.display="none";
    expand_div[0].style.display="block";
    document.getElementById("mainBar").style.height="2px";
    document.getElementById("myBar").style.height="2px";
    document.getElementById("body").style.marginTop="101px";
    document.getElementById("module").style.display="none";
    document.getElementById("menu").style.marginTop="10px";
    document.getElementById("expand").style.marginTop="10px";
    document.getElementById("collapse").style.marginTop="10px";
});

expand_button.addEventListener("click",function(evt){
    expand_div[0].style.display="none";
    collapse_div[0].style.display="block";
    document.getElementById("mainBar").style.height="4px";
    document.getElementById("myBar").style.height="4px"; 
    document.getElementById("body").style.marginTop="148px";
    document.getElementById("module").style.display="block";
    document.getElementById("menu").style.marginTop="35px";
    document.getElementById("expand").style.marginTop="35px";
    document.getElementById("collapse").style.marginTop="35px";
});
};

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

