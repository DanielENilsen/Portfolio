
let textDisplay = document.querySelectorAll(".spanclass");
let seeMore = document.getElementById('seemore');
let artprojects = document.querySelectorAll('art');
var sectionTwo = document.getElementById('sectionTwo');




function textApper() { 
    var textApper  = document.querySelector(".section-2");
    var newpos=  textApper.getBoundingClientRect().top;
    var textpos = window.innerHeight / 2;
       console.log("Hello worldf")
    if(newpos <  textpos) { 
        textApper.classList.add('displaySectiontwo');        
        }  
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


window.addEventListener('scroll',textApper);