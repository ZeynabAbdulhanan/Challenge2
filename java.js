function myClock() {
    var currentDate = new Date();
    
    var h = currentDate.getHours(); //hours, defining the variable currentDate
    var m = currentDate.getMinutes(); //minutes 
    var s = currentDate.getSeconds(); //seconds
    
    if(h < 24){
        h = h - 4; 
    }
    
    if(h == 0){
        h = 24; 
    }   
    
    if(m < 59){
        m = m - 37;
    }
    
    if(m == 0){
        m == 59;
    }
    
    var clock = document.getElementById("clock").innerHTML =   h + ":" + m + ":" + s;//id van div
    var t = setTimeout(myClock, 500);//refresch every half second 
}
