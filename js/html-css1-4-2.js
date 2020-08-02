
function show1()
{
  var options=document.querySelectorAll('input[name="question1"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";
              item.checked=false;
          })
  options[1].checked=true;
  options[2].checked=true;
  options=document.getElementsByClassName("q1option2");
  options[0].style.borderColor="green";
  options=document.getElementsByClassName("q1option3");
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
  if(options[0].checked==false&&options[1].checked==true&&options[2].checked==true&&options[3].checked==false)
  {
      var op=document.getElementsByClassName("q1option2");
      op[0].style.borderColor="green";
      var op=document.getElementsByClassName("q1option3");
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
