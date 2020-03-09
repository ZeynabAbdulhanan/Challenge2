setInterval(myClock, 1000); //refresh every one second

function myClock() {
    var currentDate = new Date();
    
    var h = currentDate.getHours(); //hours, defining the variable currentDate
    var m = currentDate.getMinutes(); //minutes 
    var s = currentDate.getSeconds(); //seconds
    
    if(h < 24){
        h = h - 5; 
    }
    
    if(h == 0){
        h = 24; 
    }   
    
    if(m < 60){
        m = m + 23;
    }
    
    if(m == 0){
        m == 60;
    }
    
    var clock = document.getElementById("clock").innerHTML =   h + ":" + m + ":" + s;//id van div
}