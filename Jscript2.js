function Start() {
    var ss = document.getElementById("splash");
    ss.style.display='none';
    
    var elem = document.getElementById("car");
     
    id = setInterval(frame, 5);
    let pos=0;
    function frame() { 
                   
        if (pos == 1220 ) {
            clearInterval(id);
            var ss = document.getElementById("splash");
            ss.style.display='block';
           
        }
        else {
            pos=pos+20;
            elem.style.left = pos + 'px';
        }
    }
} 

function Stop() {
    clearInterval(id);      
}

function Reset(){
    var ss = document.getElementById("splash");
    ss.style.display='none';

    var elem = document.getElementById("car");
    let pos=0;
    pos=pos+0;
    elem.style.left = pos + 'px';    
}