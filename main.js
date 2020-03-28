

const mediaQueryCheck = window.matchMedia('(min-width: 1200px)');
let seeMore = document.getElementById('seemore');
let textDisplay = document.getElementById(".displayText");



if(mediaQueryCheck.matches ) { 
    if(textDisplay.style.display == "none") { 
        textDisplay.style.display = "block"
    } else { 
        textDisplay.style.display = "none"
        
    }


    




}

































/*
let textDisplay = document.querySelectorAll(".spanclass");
let seeMore = document.getElementById('seemore');
let artprojects = document.querySelector('.art');
var sectionTwo = document.getElementById('sectionTwo');
let smoothBehavor = document.querySelector("html");
let myPro = document.getElementById('myPro');
let devide = document.getElementById('devide');


const box = document.getElementById('devide');

window.addEventListener('scroll' , function () { 
    if(box.getBoundingClientRect().top < window.innerHeight) { 
        
        box.style.display = "block";
     
        
    }
})


setTimeout(function() { 
    smoothBehavor.style.scrollBehavior = "smooth";
},10);





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

window.addEventListener('scroll',textApper);

*/