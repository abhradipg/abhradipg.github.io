
window.onload = function () {
var expand_button = document.getElementById("expand");
var collapse_button = document.getElementById("collapse");
var expand_div = document.getElementsByClassName("head1_e");
var collapse_div = document.getElementsByClassName("head1_c");
var expanded=false;
expand_div[0].style.display="none";

collapse_button.addEventListener("click",function(evt){
    collapse_div[0].style.display="none";
    expand_div[0].style.display="block";
    document.getElementById("mainBar").style.height="0.125rem";
    document.getElementById("myBar").style.height="0.125rem";
    document.getElementById("body").style.marginTop="6.1325rem";
    document.getElementById("module").style.display="none";
    document.getElementById("menu").style.marginTop="0.625rem";
    document.getElementById("expand").style.marginTop="0.625rem";
    document.getElementById("collapse").style.marginTop="0.625rem";
    document.getElementById("navigation").style.top="4.7rem";
    myFunction();
});

expand_button.addEventListener("click",function(evt){
    expand_div[0].style.display="none";
    collapse_div[0].style.display="block";
    document.getElementById("mainBar").style.height="0.25rem";
    document.getElementById("myBar").style.height="0.25rem"; 
    document.getElementById("body").style.marginTop="9.25rem";
    document.getElementById("module").style.display="block";
    document.getElementById("menu").style.marginTop="2.1875rem";
    document.getElementById("expand").style.marginTop="2.1875rem";
    document.getElementById("collapse").style.marginTop="2.1875rem";
    document.getElementById("navigation").style.top="7.75rem";
    myFunction();
});

document.getElementById("menu").addEventListener("click",function(evt){
   if (expanded==false)
    {
       document.getElementById("navigation").style.display="block";
       expanded=true;
     }
   else
    {
       document.getElementById("navigation").style.display="none";
       expanded=false;     
     }
});
};

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

