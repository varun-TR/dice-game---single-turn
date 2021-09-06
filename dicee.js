

const btn=document.querySelectorAll('img')[0];
btn.onclick = function(){

    let randomNumber = Math.floor(Math.random()*6)+1;
let random_img = "C:\\Dicee Challenge - Starting Files\\images\\dice"+randomNumber+".png";

let newimg=document.querySelectorAll("img")[0].setAttribute("src",random_img);


let randomNumber2 = Math.floor(Math.random()*6)+1;
let random_img2 = "C:\\Dicee Challenge - Starting Files\\images\\dice"+randomNumber2+".png";

let newimg2=document.querySelectorAll("img")[1].setAttribute("src",random_img2);
    



if(randomNumber>randomNumber2)
{
    
    
        document.querySelector("h1").innerHTML="Human Wins!"
   
}
else if(randomNumber<randomNumber2)
{
  
        document.querySelector("h1").innerHTML="CPU Wins!"
        
 
}
else
{
    
        document.querySelector("h1").innerHTML="Draw!"
    


}
}
