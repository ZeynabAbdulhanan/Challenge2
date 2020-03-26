function myClock() {
  
    var currentDate = new Date();
    
    var hours = currentDate.getHours(); //hours, defining the variable currentDate
    var minutes = currentDate.getMinutes();//minutes 
    var seconds = currentDate.getSeconds(); //seconds
    
   
    var amPm = (hours < 12 ) ? "AM" : "PM"; 
    
    
    hours = (hours > 12) ? hours - 12 : hours;
  
   //nul te toevoegen voor het nummer als tijd is kleiner dan 10 uur  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
      
    var clock = document.getElementById('clock').innerHTML =   hours + ":" + minutes + ":" + seconds + "" + amPm;//id van div
      
    var t = setTimeout(myClock, 1000);  
    
    if(hours >= 6 && hours < 12){
        document.body.style.backgroundColor = "#00000";
    }
    
    else if (hours >= 12 && hours < 18){
        document.body.style.backgroundColor = "#343235";
    }
    
    else{
        document.body.style.backgroundColor = "#000000";
    } 
}