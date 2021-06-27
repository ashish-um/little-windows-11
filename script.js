startButton = document.getElementsByClassName('start-icon')[0];
startMenu = document.getElementsByClassName('startmenu')[0];

startButton.addEventListener("click", function () {
    if(startMenu.style.bottom == "50px"){
        startMenu.style.opacity = "0%"
        startMenu.style.bottom = "-10px";
        
        
    }else{        
        startMenu.style.opacity = "100%";        
        startMenu.style.bottom = "50px";
    }
    
});
