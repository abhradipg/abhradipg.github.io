var mod=[false,false,false,false,false,false];
var disall=false;
function display1() 
{ 
            if(mod[0]==false)
            {
                var x = document.querySelectorAll(".module_1_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "block";
                        }
                 )
                mod[0]=true;
             } 
            else
            {
                var x = document.querySelectorAll(".module_1_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "none";
                        }
                 )
                mod[0]=false;
            } 
        } 
function display2() 
{ 
            if(mod[1]==false)
            {
                var x = document.querySelectorAll(".module_2_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "block";
                        }
                 )
                mod[1]=true;
             } 
            else
            {
                var x = document.querySelectorAll(".module_2_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "none";
                        }
                 )
                mod[1]=false;
            } 
        } 
function display3() 
{ 
            if(mod[2]==false)
            {
                var x = document.querySelectorAll(".module_3_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "block";
                        }
                 )
                mod[2]=true;
             } 
            else
            {
                var x = document.querySelectorAll(".module_3_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "none";
                        }
                 )
                mod[2]=false;
            } 
        } 
function display4() 
{ 
            if(mod[3]==false)
            {
                var x = document.querySelectorAll(".module_4_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "block";
                        }
                 )
                mod[3]=true;
             } 
            else
            {
                var x = document.querySelectorAll(".module_4_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "none";
                        }
                 )
                mod[3]=false;
            } 
        } 
function display5() 
{ 
            if(mod[4]==false)
            {
                var x = document.querySelectorAll(".module_5_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "block";
                        }
                 )
                mod[4]=true;
             } 
            else
            {
                var x = document.querySelectorAll(".module_5_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "none";
                        }
                 )
                mod[4]=false;
            } 
        } 
function display6() 
{ 
            if(mod[5]==false)
            {
                var x = document.querySelectorAll(".module_6_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "block";
                        }
                 )
                mod[5]=true;
             } 
            else
            {
                var x = document.querySelectorAll(".module_6_list");
                x.forEach(
                     function(item)
                     {
                        item.style.display = "none";
                        }
                 )
                mod[5]=false;
            } 
        } 
function displayAll()
{
  if(disall==false)
   {
       disall=true;
       document.querySelector("#expand").innerHTML="Colpase All";
       mod.forEach( function(i,index){mod[index]=false;}
         )
       display1();
       display2();
       display3();
       display4();
       display5();
       display6();
     }
   else
     {
         disall=false;
       document.querySelector("#expand").innerHTML="Expand All";
       mod.forEach( function(i,index){mod[index]=true;}
         )
       display1();
       display2();
       display3();
       display4();
       display5();
       display6();
    }
}