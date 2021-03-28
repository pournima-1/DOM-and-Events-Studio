// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init()
{
    const missionTakeoff = document.getElementById("takeoff");
    const missionLanding = document.getElementById("landing");
    const missionflightAbort = document.getElementById("missionAbort");
    const imgObj = document.getElementById('rocket');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
    
    function flightSimulator() 
    {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response){
            let flightStatus = document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            let backcolor = document.getElementById("shuttleBackground").style.backgroundColor = "Blue";
            let shuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    }
     let response = document.getElementById("takeoff");
     response.onclick = flightSimulator;
/*
     let resp2 = document.getElementById("flightStatus");
     resp2.addEventListener("click", flightSimulator);

    let resp3 = document.getElementById("shuttleBackground");
    resp3.addEventListener("click",flightSimulator);

    let resp4 = document.getElementById("spaceShuttleHeight");
    resp4.addEventListener("click", flightSimulator);*/

    function flightLand(){
      let button = document.getElementById("landing");
      let response = window.alert("The shuttle is landing. Landing gear engaged.");
      let flightsStatus =  document.getElementById("flightStatus").innerHTML = "The shuttle has landed";
      let backColor = document.getElementById("shuttleBackground").style.backgroundColor = "green";
      let shuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML = 0;
      imgObj.style.position = 'relative';
      imgObj.style.left = '0px';
      imgObj.style.top = '0px';
    }

    let response1 = document.getElementById("landing");
    response1.onclick = flightLand;
/*
    let response2 = document.getElementById("flightStatus");
    response2.onclick = flightLand;

    let response3 = document.getElementById("shuttleBackground");
    response3.onclick = flightLand;

    let response4 = document.getElementById("spaceShuttleHeight");
    response4.onclick = flightLand;*/
    
    function flightAbortMission() {
        let button = document.getElementById("missionAbort");
        let response = window.confirm("Confirm that you want to abort the mission.");
        if(response){
            let flightsStatus = document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            let backColor = document.getElementById("shuttleBackground").style.backgroundColor = "green";
            let shuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML = 0;
            imgObj.style.position = 'relative';
            imgObj.style.left = '0px';
            imgObj.style.top = '0px';
        }
    }
    let abortResponse = document.getElementById("missionAbort");
    abortResponse.onclick = flightAbortMission;

    /*let abortResponse1 = document.getElementById("flightStatus");
    abortResponse1.onclick = flightAbortMission;

    let abortResponse2 = document.getElementById("shuttleBackground");
    abortResponse2.onclick = flightAbortMission;

    let abortResponse3 = document.getElementById("spaceShuttleHeight");
    abortResponse3.onclick = flightAbortMission;*/

function move_img_rigth(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

function move_img_left(){
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
}


function move_img_down() {  
    imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
    document.getElementById("spaceShuttleHeight").innerHTML= parseInt(document.getElementById("spaceShuttleHeight").innerHTML)-10000;      
}

function move_img_top() {   
    imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
    document.getElementById("spaceShuttleHeight").innerHTML= parseInt(document.getElementById("spaceShuttleHeight").innerHTML)+10000; 
          
}


    let move1 = document.getElementById("up");
    move1.onclick = move_img_top;    
    let move2 = document.getElementById("down");
    move2.onclick = move_img_down;
    let move3 = document.getElementById("right");
    move3.onclick = move_img_rigth;
    let move4 = document.getElementById("left");
    move4.onclick = move_img_left;
}


    window.addEventListener("load",init);

