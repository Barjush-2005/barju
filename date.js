
var cat = document.querySelector("#s")
var cat1 = document.querySelector("#s1")
var cat3 = document.querySelector("#s3")
var cat4 = document.querySelector("#s4")
var cat5 = document.querySelector("#s5")
var cat6 = document.querySelector("#s6")
var date=new Date()
var d=date.getDate()
var hour=date.getHours()
var mins=date.getMinutes()
var months=date.getMonth()+1
var day=date.getDay()+1
var sec=date.getSeconds()
console.log(date)
console.log(hour)
// cat.innerHTML="hours:"+hour
cat4.innerHTML="month:"+months
cat.innerHTML="date:"+d
cat3.innerHTML="minutes:"+mins

cat5.innerHTML="day:"+day
cat6.innerHTML="Time:"+hour+":"+mins+":"+sec