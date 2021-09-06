

// let newimg1=document.querySelectorAll('img')[0].setAttribute("src",image1);


let newimg1=document.querySelectorAll('img')[0];
 newimg1.addEventListener('click',function () {
    const randomNumber1=Math.floor(Math.random()*6)+1;
    let image1="C:\\Dicee Challenge - Starting Files\\images\\dice"+randomNumber1+".png";
    document.querySelectorAll('img')[0].setAttribute("src",image1);


    


let newimg2=document.querySelectorAll('img')[1];
 newimg2.addEventListener('click',function () {
     const randomNumber2=Math.floor(Math.random()*6)+1;
    let image2="C:\\Dicee Challenge - Starting Files\\images\\dice"+randomNumber2+".png";
    
    document.querySelectorAll('img')[1].setAttribute("src",image2);





if(randomNumber1>randomNumber2)
{
    // setTimeout(()=>{
        document.querySelector('h1').innerHTML="Player 1 wins!";
     
    // },1000);
}
else if(randomNumber1<randomNumber2){
    

    // setTimeout(()=>{
        document.querySelector('h1').innerHTML="Player 2 wins!";
    // },1000);

}
else
{
    document.querySelector('h1').innerHTML="Draw!";
}

setTimeout(()=>{
    document.querySelector('h1').innerHTML="refresh me!";
    location.reload();
},2000);


  }) ;
});

