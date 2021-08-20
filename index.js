for(var i=0; i <  6; i++){
    document.querySelectorAll("button")[i].addEventListener('click', handleClick);    
}

function handleClick(){
    alert("I got Clicked");
}
