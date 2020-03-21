window.addEventListener('scroll',textApper);
let textDisplay = document.querySelectorAll(".spanclass");
let seeMore = document.getElementById('seemore');
let artprojects = document.querySelector('.art');
var sectionTwo = document.getElementById('sectionTwo');
let smoothBehavor = document.querySelector("html");
let myPro = document.getElementById('myPro');


setTimeout(function() { 
    smoothBehavor.style.scrollBehavior = "smooth";
},1700);


function textApper() { 
    var textApper  = document.querySelector(".art");
    var newpos=  textApper.getBoundingClientRect().top;
    var textpos = window.innerHeight / 0.6;
    
    
    if(newpos <  textpos) {   
        textApper.classList.add('displaySectiontwo');  
        myPro.style.display = "block";   
         
    }  
    cardsPopup();

}


function delay(time) { 
    return new Promise(resolve => setTimeout(resolve,time));
}

async function desplaytext() {
    for(let i = 0 ; i < textDisplay.length;i++) { 
       await delay(70);
        textDisplay[i].style.display = "block";
    }    
}
desplaytext();

setTimeout(function() { 
    if(seeMore.style.display == "block") { 
        seeMore.style.display = "none";
    } else { 
        seeMore.style.display = "block";
    } 
},1500)



 async function cardsPopup() { 
   
    for(let i = 0; i < artprojects.length;i++) { 
        console.log("Hello worldf")
        await delay(300);
       
       if(artprojects[i].style.display == "block") { 
           artprojects[i].style.display = "none";
       } else { 
        artprojects[i].style.display = "block";
       }

    }


}

