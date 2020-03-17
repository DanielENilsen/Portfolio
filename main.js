
let textDisplay = document.querySelectorAll(".spanclass");
let seeMore = document.getElementById('seemore');

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