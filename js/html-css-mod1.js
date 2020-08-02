
function show1()
{
  document.getElementById("answer1").style.display="block";
  document.getElementById("question1_ans").style.display="inline";
}
function submit1()
{
  var options=document.querySelectorAll('input[name="question1"]');
  var ans1="markup";
  var ans2="Mark-up"
  var ans3="Mark up";
  if(options[0].value.toUpperCase()==ans1.toUpperCase()||options[0].value.toUpperCase()==ans2.toUpperCase()||options[0].value.toUpperCase()==ans3.toUpperCase())
  {
      options[0].style.borderColor="green";
   }
   else
   {
      options[0].style.borderColor="red";
    }
}
function show6()
{
  document.getElementById("answer6").style.display="block";
  document.getElementById("question6_ans").style.display="inline";
}
function submit6()
{
  var options=document.querySelectorAll('input[name="question6"]');
  var ans1="tags";
  var ans2="tag"
  if(options[0].value.toUpperCase()==ans1.toUpperCase()||options[0].value.toUpperCase()==ans2.toUpperCase())
  {
      options[0].style.borderColor="green";
   }
   else
   {
      options[0].style.borderColor="red";
    }
}
function show10()
{
  document.getElementById("answer10").style.display="block";
  document.getElementById("question10_ans").style.display="inline";
}
function submit10()
{
  var options=document.querySelectorAll('input[name="question10"]');
  var ans1="blockquote";
  var ans2="<blockquote>"
  if(options[0].value.toUpperCase()==ans1.toUpperCase()||options[0].value.toUpperCase()==ans2.toUpperCase())
  {
      options[0].style.borderColor="green";
   }
   else
   {
      options[0].style.borderColor="red";
    }
}
function show16()
{
  document.getElementById("answer16").style.display="block";
  document.getElementById("question16_ans").style.display="inline";
}
function submit16()
{
  var options=document.querySelectorAll('input[name="question16"]');
  var ans1="em";
  var ans2="<em>";
  var ans3="strong";
  var ans4="<strong>";
  if(options[0].value.toUpperCase()==ans1.toUpperCase()||options[0].value.toUpperCase()==ans2.toUpperCase()||options[0].value.toUpperCase()==ans3.toUpperCase()||options[0].value.toUpperCase()==ans4.toUpperCase())
  {
      options[0].style.borderColor="green";
   }
   else
   {
      options[0].style.borderColor="red";
    }
}
function show17()
{
  document.getElementById("answer17").style.display="block";
  document.getElementById("question17_ans").style.display="inline";
}
function submit17()
{
  var options=document.querySelectorAll('input[name="question17"]');
  var ans1="/div";
  var ans2="</div>";
  if(options[0].value.toUpperCase()==ans1.toUpperCase()||options[0].value.toUpperCase()==ans2.toUpperCase())
  {
      options[0].style.borderColor="green";
   }
   else
   {
      options[0].style.borderColor="red";
    }
}
function show18()
{
  document.getElementById("answer18").style.display="block";
  document.getElementById("question18_ans").style.display="inline";
}
function submit18()
{
  var options=document.querySelectorAll('input[name="question18"]');
  var ans1="paragraphs";
  var ans2="paragraph";
  var ans3="a paragraph";
  if(options[0].value.toUpperCase()==ans1.toUpperCase()||options[0].value.toUpperCase()==ans2.toUpperCase()||options[0].value.toUpperCase()==ans3.toUpperCase())
  {
      options[0].style.borderColor="green";
   }
   else
   {
      options[0].style.borderColor="red";
    }
}
function show19()
{
  document.getElementById("answer19").style.display="block";
  document.getElementById("question19_ans").style.display="inline";
}
function submit19()
{
  var options=document.querySelectorAll('input[name="question19"]');
  var ans1="li";
  var ans2="<li>";
  if(options[0].value.toUpperCase()==ans1.toUpperCase()||options[0].value.toUpperCase()==ans2.toUpperCase())
  {
      options[0].style.borderColor="green";
   }
   else
   {
      options[0].style.borderColor="red";
    }
}
function show22()
{
  document.getElementById("answer22").style.display="block";
  document.getElementById("question22_ans").style.display="inline";
}
function submit22()
{
  var options=document.querySelectorAll('input[name="question22"]');
  var ans1="white space";
  var ans2="white spaces";
  var ans3="whitespaces";
  var ans4="white-spaces";
  var ans5="whitespace";
  var ans6="white-space";
  if(options[0].value.toUpperCase()==ans1.toUpperCase()||options[0].value.toUpperCase()==ans2.toUpperCase()||options[0].value.toUpperCase()==ans3.toUpperCase()||options[0].value.toUpperCase()==ans4.toUpperCase()||options[0].value.toUpperCase()==ans5.toUpperCase()||options[0].value.toUpperCase()==ans6.toUpperCase())
  {
      options[0].style.borderColor="green";
   }
   else
   {
      options[0].style.borderColor="red";
    }
}
function show2()
{
  document.getElementById("answer2").style.display="block";
  var options=document.querySelectorAll('input[name="question2"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[1].checked=true;
  options=document.getElementsByClassName("q2option2");
  options[0].style.borderColor="green";
}
function submit2()
{
  var options=document.querySelectorAll('input[name="question2"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[1].checked==true)
  {
      var op=document.getElementsByClassName("q2option2");
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
function show4()
{
  document.getElementById("answer4").style.display="block";
  var options=document.querySelectorAll('input[name="question4"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[0].checked=true;
  options=document.getElementsByClassName("q4option1");
  options[0].style.borderColor="green";
}
function submit4()
{
  var options=document.querySelectorAll('input[name="question4"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==true)
  {
      var op=document.getElementsByClassName("q4option1");
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
function show5()
{
  document.getElementById("answer5").style.display="block";
  var options=document.querySelectorAll('input[name="question5"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[1].checked=true;
  options=document.getElementsByClassName("q5option2");
  options[0].style.borderColor="green";
}
function submit5()
{
  var options=document.querySelectorAll('input[name="question5"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[1].checked==true)
  {
      var op=document.getElementsByClassName("q5option2");
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
function show7()
{
  document.getElementById("answer7").style.display="block";
  var options=document.querySelectorAll('input[name="question7"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[0].checked=true;
  options=document.getElementsByClassName("q7option1");
  options[0].style.borderColor="green";
}
function submit7()
{
  var options=document.querySelectorAll('input[name="question7"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==true)
  {
      var op=document.getElementsByClassName("q7option1");
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
function show8()
{
  document.getElementById("answer8").style.display="block";
  var options=document.querySelectorAll('input[name="question8"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[0].checked=true;
  options=document.getElementsByClassName("q8option1");
  options[0].style.borderColor="green";
}
function submit8()
{
  var options=document.querySelectorAll('input[name="question8"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==true)
  {
      var op=document.getElementsByClassName("q8option1");
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
function show9()
{
  document.getElementById("answer9").style.display="block";
  var options=document.querySelectorAll('input[name="question9"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[0].checked=true;
  options=document.getElementsByClassName("q9option1");
  options[0].style.borderColor="green";
}
function submit9()
{
  var options=document.querySelectorAll('input[name="question9"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==true)
  {
      var op=document.getElementsByClassName("q9option1");
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
function show11()
{
  document.getElementById("answer11").style.display="block";
  var options=document.querySelectorAll('input[name="question11"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[0].checked=true;
  options=document.getElementsByClassName("q11option1");
  options[0].style.borderColor="green";
}
function submit11()
{
  var options=document.querySelectorAll('input[name="question11"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==true)
  {
      var op=document.getElementsByClassName("q11option1");
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
function show12()
{
  document.getElementById("answer12").style.display="block";
  var options=document.querySelectorAll('input[name="question12"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[1].checked=true;
  options=document.getElementsByClassName("q12option2");
  options[0].style.borderColor="green";
}
function submit12()
{
  var options=document.querySelectorAll('input[name="question12"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[1].checked==true)
  {
      var op=document.getElementsByClassName("q12option2");
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
function show13()
{
  document.getElementById("answer13").style.display="block";
  var options=document.querySelectorAll('input[name="question13"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[1].checked=true;
  options=document.getElementsByClassName("q13option2");
  options[0].style.borderColor="green";
}
function submit13()
{
  var options=document.querySelectorAll('input[name="question13"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[1].checked==true)
  {
      var op=document.getElementsByClassName("q13option2");
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
function show14()
{
  document.getElementById("answer14").style.display="block";
  var options=document.querySelectorAll('input[name="question14"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[0].checked=true;
  options=document.getElementsByClassName("q14option1");
  options[0].style.borderColor="green";
}
function submit14()
{
  var options=document.querySelectorAll('input[name="question14"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==true)
  {
      var op=document.getElementsByClassName("q14option1");
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
function show15()
{
  document.getElementById("answer15").style.display="block";
  var options=document.querySelectorAll('input[name="question15"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[1].checked=true;
  options=document.getElementsByClassName("q15option2");
  options[0].style.borderColor="green";
}
function submit15()
{
  var options=document.querySelectorAll('input[name="question15"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[1].checked==true)
  {
      var op=document.getElementsByClassName("q15option2");
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
function show21()
{
  document.getElementById("answer21").style.display="block";
  var options=document.querySelectorAll('input[name="question21"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[2].checked=true;
  options=document.getElementsByClassName("q21option3");
  options[0].style.borderColor="green";
}
function submit21()
{
  var options=document.querySelectorAll('input[name="question21"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[2].checked==true)
  {
      var op=document.getElementsByClassName("q21option3");
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
function show23()
{
  document.getElementById("answer23").style.display="block";
  var options=document.querySelectorAll('input[name="question23"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[0].checked=true;
  options=document.getElementsByClassName("q23option1");
  options[0].style.borderColor="green";
}
function submit23()
{
  var options=document.querySelectorAll('input[name="question23"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==true)
  {
      var op=document.getElementsByClassName("q23option1");
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
function show24()
{
  document.getElementById("answer24").style.display="block";
  var options=document.querySelectorAll('input[name="question24"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[0].checked=true;
  options=document.getElementsByClassName("q24option1");
  options[0].style.borderColor="green";
}
function submit24()
{
  var options=document.querySelectorAll('input[name="question24"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==true)
  {
      var op=document.getElementsByClassName("q24option1");
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
function show25()
{
  document.getElementById("answer25").style.display="block";
  var options=document.querySelectorAll('input[name="question25"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[0].checked=true;
  options=document.getElementsByClassName("q25option1");
  options[0].style.borderColor="green";
}
function submit25()
{
  var options=document.querySelectorAll('input[name="question25"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==true)
  {
      var op=document.getElementsByClassName("q25option1");
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
function show26()
{
  document.getElementById("answer26").style.display="block";
  var options=document.querySelectorAll('input[name="question26"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[0].checked=true;
  options=document.getElementsByClassName("q26option1");
  options[0].style.borderColor="green";
}
function submit26()
{
  var options=document.querySelectorAll('input[name="question26"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==true)
  {
      var op=document.getElementsByClassName("q26option1");
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
function show27()
{
  document.getElementById("answer27").style.display="block";
  var options=document.querySelectorAll('input[name="question27"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  options[1].checked=true;
  options=document.getElementsByClassName("q27option2");
  options[0].style.borderColor="green";
}
function submit27()
{
  var options=document.querySelectorAll('input[name="question27"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[1].checked==true)
  {
      var op=document.getElementsByClassName("q27option2");
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
function show3()
{
  document.getElementById("answer3").style.display="block";
  var options=document.querySelectorAll('input[name="question3"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";
              item.checked=false;
          })
  options[1].checked=true;
  options[2].checked=true;
  options=document.getElementsByClassName("q3option2");
  options[0].style.borderColor="green";
  options=document.getElementsByClassName("q3option3");
  options[0].style.borderColor="green";
}
function submit3()
{
  var options=document.querySelectorAll('input[name="question3"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==false&&options[1].checked==true&&options[2].checked==true&&options[3].checked==false)
  {
      var op=document.getElementsByClassName("q3option2");
      op[0].style.borderColor="green";
      var op=document.getElementsByClassName("q3option3");
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
function show20()
{
  document.getElementById("answer20").style.display="block";
  var options=document.querySelectorAll('input[name="question20"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";
              item.checked=false;
          })
  options[0].checked=true;
  options[1].checked=true;
  options[2].checked=true;
  options[3].checked=true;
  options=document.getElementsByClassName("q20option1");
  options[0].style.borderColor="green";
  options=document.getElementsByClassName("q20option2");
  options[0].style.borderColor="green";
  options=document.getElementsByClassName("q20option3");
  options[0].style.borderColor="green";
  options=document.getElementsByClassName("q20option4");
  options[0].style.borderColor="green";
}
function submit20()
{
  var options=document.querySelectorAll('input[name="question20"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==true&&options[1].checked==true&&options[2].checked==true&&options[3].checked==true&&options[4].checked==false)
  {
      var op=document.getElementsByClassName("q20option1");
      op[0].style.borderColor="green";
      var op=document.getElementsByClassName("q20option2");
      op[0].style.borderColor="green";
      var op=document.getElementsByClassName("q20option3");
      op[0].style.borderColor="green";
      var op=document.getElementsByClassName("q20option4");
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
function show28()
{
  document.getElementById("answer28").style.display="block";
  var options=document.querySelectorAll('input[name="question28"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";
              item.checked=false;
          })
  options[1].checked=true;
  options[2].checked=true;
  options=document.getElementsByClassName("q28option2");
  options[0].style.borderColor="green";
  options=document.getElementsByClassName("q28option3");
  options[0].style.borderColor="green";
}
function submit28()
{
  var options=document.querySelectorAll('input[name="question28"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==false&&options[1].checked==true&&options[2].checked==true&&options[3].checked==false)
  {
      var op=document.getElementsByClassName("q28option2");
      op[0].style.borderColor="green";
      var op=document.getElementsByClassName("q28option3");
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
function show29()
{
  document.getElementById("answer29").style.display="block";
  var options=document.querySelectorAll('input[name="question29"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";
              item.checked=false;
          })
  options[1].checked=true;
  options=document.getElementsByClassName("q29option2");
  options[0].style.borderColor="green";
}
function submit29()
{
  var options=document.querySelectorAll('input[name="question29"]');
  options.forEach(
            function(item)
          {
              item.parentElement.style.borderColor="#ccc";   
          })
  if(options[0].checked==false&&options[1].checked==true&&options[2].checked==false&&options[3].checked==false)
  {
      var op=document.getElementsByClassName("q29option2");
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