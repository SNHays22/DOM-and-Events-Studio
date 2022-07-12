// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    console.log('window loaded');

    const takeOffButton = document.getElementById('takeoff');
    const paragraph = document.getElementById('flightStatus');
    const flightScreen = document.getElementById('shuttleBackground');
    const heightShuttle = document.getElementById('spaceShuttleHeight');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');
    const imgRocket = document.getElementById('rocket');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');

    imgRocket.style.position = 'absolute';
    imgRocket.style.left = '0px';
    imgRocket.style.bottom = '0px';
    

    takeOffButton.addEventListener('click', () =>{
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if(response){
            paragraph.innerHTML = 'Shuttle in flight.';
            flightScreen.style.background = 'blue';
            heightShuttle.innerHTML= parseInt(heightShuttle.innerHTML) + Number(10000);
            console.log(heightShuttle.innerHTML);
        };
    });

    landButton.addEventListener('click', () =>{
        window.alert("The shuttle is landing. Landing gear engaged.");
        paragraph.innerHTML = 'The shuttle has landed.';
        flightScreen.style.background = 'green';
        heightShuttle.innerHTML = '0';
        imgRocket.style.position = 'absolute';
        imgRocket.style.bottom = '0px';
        imgRocket.style.left = '0px';
    });

    abortButton.addEventListener('click', () =>{
        let response = window.confirm("Confirm that you want to abort the mission.");

        if(response){
            paragraph.innerHTML = 'Mission aborted.';
            flightScreen.style.background = 'green';
            height.innerHTML = 0;
            imgRocket.style.position = 'absolute';
            imgRocket.style.bottom = '0px';
            imgRocket.style.left = '0px';
        };
    });

    let rocketTop = 0;
    let rocketLeft = 2;
    upButton.addEventListener('click', () => {
        if(rocketTop < 25){
            movement = parseInt(imgRocket.style.bottom)+ 10 +'px';
            imgRocket.style.bottom = movement;
            rocketTop += 1;
        }    
    });

    downButton.addEventListener('click', () => {
        if(rocketTop > 0){
            movement = parseInt(imgRocket.style.bottom)- 10 +'px';
            imgRocket.style.bottom = movement;
            rocketTop -= 1;
        }
    });

    leftButton.addEventListener('click', () => {
        if(rocketLeft > 0){
            movement = parseInt(imgRocket.style.left)- 10 +'px';
            imgRocket.style.left = movement;
            rocketLeft -= 1;
        }
    });

    rightButton.addEventListener('click', () => {
        if(rocketLeft < 40){
            movement = parseInt(imgRocket.style.left) + 10 +'px';
            imgRocket.style.left = movement;
            rocketLeft += 1;
        }    
    });


})