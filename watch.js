let hour = 0;
let minute = 0;
let second = 0;


let gethour = document.querySelector('.hour');
let getminute = document.querySelector('.minute');
let getsecond = document.querySelector('.second');
let btnstart = document.querySelector('.btn-start');
let btnreset = document.querySelector('.btn-reset');
let btnstop = document.querySelector('.btn-stop');
let interval;
// btnstart.addEventListener('click',()=>{
//     interval=setInterval(starttimer,100);


// })
// btnreset.addEventListener('click', () => {
//     clearInterval(interval);
//     second = '00';
//     minute = '00';
//     hour = '00';
//     getminute.innerHTML = minute;
//     getsecond.innerHTML = second;
//     gethour.innerHTML = hour;

// })

function stopInterval() {
   clearInterval(interval);
btnstop.Disabled=false;
}

function resetStopwatch() {
    second = 0;
    minute = 0;
    hour = 0;
    clearInterval(interval);

    getsecond.innerHTML = '00';
    getminute.innerHTML = '00';
    gethour.innerHTML = '00';
}

function starttimer() {

    interval = setInterval(() => {
        second = second + 1;

        if (second < 10) {
            getsecond.innerHTML = '0' + second;
        } else {
            getsecond.innerHTML = second;

            if (second > 59) {
                second = 0;
                getsecond.innerHTML = "00";

                minute = minute + 1;

                if (minute < 10) {
                    getminute.innerHTML = '0' + minute;
                } else {
                    getminute.innerHTML = minute;

                    if (minute > 59) {
                        minute = 0;
                        getminute.innerHTML = "00";

                        hour = hour + 1;

                        if (hour < 10) {
                            gethour.innerHTML = '0' + hour;
                        } else {
                            gethour.innerHTML = hour;
                        }
                    }
                }
            }
        }

    }, 1000);


    // if(second<=95){

    //     getsecond.innerHTML='0'+second;
    //     }
    //     if(second<10){
    //         getsecond.innerHTML=second;

    //     }
    //     if(second>60){

    //         minute++;
    //         getminute.innerHTML='0'+minute;
    //         minute=0;
    //         getsecond.innerHTML='0'+0;

    //     }
    //     if(minute>10){
    //         getminute.innerHTML=minute;
    //     }
    //     if(minute>60){
    //         hour++;
    //         gethour.innerHTML='0'+hour;
    //         hour=0;
    //         getminute.innerHTML='0'+0;
    //     }
    //     if(hour>10){
    //          gethour.innerHTML=hour;

    //     }  



}