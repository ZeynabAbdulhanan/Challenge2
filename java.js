setInterval(myClock, 1000); //refresh every one second

function myClock() {
    var currentDate = new Date();
    
    var h = document.getElementById('h'); //hours, defining the variable currentDate
    var m = document.getElementById('m');//minutes 
    var s = document.getElementById('s'); //seconds
    var ampm = document.getElementById('ampm');
    
    
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds(); 
    var ampm = "am"; 
    
    if(h>24){
        h = h-24; 
        var am = "pm"
    }
   //nul te toevoegen voor het nummer als tijd is kleiner dan 10 uur  
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s
    
    h.innerHTML = h; 
    m.innerHTML = m; 
    s.innerHTML = s;
    ampm.innerHTML = am;

    var clock = document.getElementById("clock").innerHTML =   h + ":" + m + ":" + s + "" + ampm;//id van div
}

//veel fouten, vraag docent:(