
window.onscroll = function() {scrollFunction()};
let x = document.getElementsByClassName("linkItem");
let fill=document.getElementsByClassName("icon-navbar");

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {

      document.getElementById("navbar").style.background = "#000012";
      document.getElementById("logo").style.color = "white";



      for(let i = 0; i < 7; i++){
          x[i].style.color= "white";
          fill[i].style.fill= "white";
          fill[i].style.color= "white";
      }

    }
    else {
      document.getElementById("navbar").style.background = "#ffff";  
      document.getElementById("logo").style.color = "#464D5C";
      for(let i = 0; i < 7; i++){
        x[i].style.color= "#3E3E3E";
        fill[i].style.fill= "#3E3E3E";
        fill[i].style.color= "#3E3E3E";
        }
      

    }
  }

