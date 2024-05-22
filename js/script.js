// --------   Variables =>
const $ = document

let secondElem = $.querySelector("#seconds")
let minuteElem = $.querySelector("#minute")
let hoursElem = $.querySelector("#hour")



// --------   Main Function For Interval =>
function timeHandler () {

let myTime = new Date()

let second = myTime.getSeconds()
let minute = myTime.getMinutes()
let hours = myTime.getHours()

        secondElem.innerHTML = second
        minuteElem.innerHTML = minute
        hoursElem.innerHTML = hours

    if (second < 10) {
        secondElem.innerHTML = "0" + second
    } 
    if (minute < 10) {
        minuteElem.innerHTML = "0" + minute
    } 
    if (hours < 10) {
        hoursElem.innerHTML = "0" + hours
    }
}

setInterval ( timeHandler , 1000)
