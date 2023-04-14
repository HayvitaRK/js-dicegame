// ran no generation for dice 1 changings
var ran=Math.floor(Math.random() * 6) + 1;
var img= "img" + ran + ".png"; //link creation
var imgsrc="images/" +img;    //folder combination
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imgsrc);

// ran no generation for dice 2
var ran2=Math.floor(Math.random()*6)+1;
var img2="images/img"+ran2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img2);

if (ran > ran2)
  {
    document.querySelector("h3").innerHTML="winner is player 1";

   }
else if(ran === ran2)
{
    document.querySelector("h3").innerHTML="draw try again!!!!!";

}
else
{
    document.querySelector("h3").innerHTML="winner is player 2";

   }
