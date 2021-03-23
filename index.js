const days1 = document.getElementById('days')
const hours1 = document.getElementById('hours')
const min1 = document.getElementById('mins')
const seconds1 = document.getElementById('seconds')

const myBirthday = '18 July 2021'
function countDown(){
    const myBirthdayDate = new Date(myBirthday)
    const currentDate = new Date ();
    //This gives me the time difference
    const time_diff = myBirthdayDate - currentDate;

    const second = time_diff/1000;

    const days = Math.floor(second / (3600 * 24));
    const hours = Math.floor(second /3600) % 24;
    const min =Math.floor( second /60) % 60;
    const remSecond = Math.floor(second)%60

    //const currentSecond = second / 60;
    days1.innerHTML = formatTime(days);
    hours1.innerHTML = formatTime(hours);
    min1.innerHTML = formatTime(min);
    seconds1.innerHTML = formatTime(remSecond);
    
    console.log(time_diff)
    console.log(days,hours,min,second)
}

const formatTime = time =>{
    return time < 10 ? (`0${time}`) : time;
}
countDown();

setInterval(countDown,1000);