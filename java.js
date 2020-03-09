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
//vraag aan docent, hoe moet ik minuten fixen?
//vraag aan docent, 0 toevoegen voor het nummer, dus 09 en niet 9    
    
    var clock = document.getElementById("clock").innerHTML =   h + ":" + m + ":" + s;//id van div
}