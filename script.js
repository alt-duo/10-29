month1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
day1 = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th",
"21st", "22nd", "23rd", "24th", "25th",
"26th", "27th", "28th", "29th", "30th", "31st"];
let beforetime, aftertime, diff;
name2.addEventListener("click",change);
displayClock();
function displayClock() {
    const now = new Date();
    let month = now.getMonth();
    let date = now.getDate();
    let year = now.getFullYear();


    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ending = "AM";
    if(hours>12){
        hours = hours - 12;
        ending = "PM";
    }
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    const final = "Today is " + month1[month] + " " + day1[date-1] + ", " + year + "<br> It is " +  hours + ":" + minutes + ":" + seconds + " " + ending;
    document.getElementById("clock").innerHTML = final;
    beforetime = now.getTime();
}

function change(){
    const now1 = new Date();
    aftertime = now1.getTime();
    diff = (aftertime-beforetime)/1000;
    document.getElementById("change2").innerHTML = diff + " seconds have passed since you loaded this page.";


}
