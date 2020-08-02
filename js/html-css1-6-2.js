function show1()
{
  document.getElementById("answer1").style.display="block";
  document.getElementById("question1_ans").style.display="inline";
}
function submit1()
{
  var options=document.querySelectorAll('input[name="question1"]');
  var ans1="li";
  var ans2="<li>"
  if(options[0].value.toUpperCase()==ans1.toUpperCase()||options[0].value.toUpperCase()==ans2.toUpperCase())
  {
      options[0].style.borderColor="green";
   }
   else
   {
      options[0].style.borderColor="red";
    }
}