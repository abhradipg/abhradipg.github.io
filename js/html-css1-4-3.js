function show1()
{
  document.getElementById("answer1").style.display="block";
  var options=document.querySelectorAll('input[name="question1"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[1].checked=true;
  options=document.getElementsByClassName("q1option2");
  options[0].style.borderColor="green";
}
function submit1()
{
  var options=document.querySelectorAll('input[name="question1"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[1].checked==true)
  {
      var op=document.getElementsByClassName("q1option2");
      op[0].style.borderColor="green";
   }
   else
   {
       options.forEach(
            function(item)
          {
               if(item.checked==true)
            {
               item.parentElement.style.borderColor="red";
             }
            }
        )
    }
}