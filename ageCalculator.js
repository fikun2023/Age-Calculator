let day=document.getElementById("day")
let month=document.getElementById("month")
let year=document.getElementById("year")
let submit=document.getElementById("icon")
let yearSpan=document.getElementById("yearSpan")
let monthSpan=document.getElementById("monthSpan")
let daySpan=document.getElementById("daySpan")

submit.addEventListener("click",clk)
function clk(){
    // ||month.value==""||year.value==""
    if(day.value=="")
    {
        document.getElementById("errorday").style.display="block"
        document.getElementById("errorday").style.color="red"
        if(day.value>=31||day.value<=0)
        {
            document.getElementById("errorday").style.display="block"
            document.getElementById("errorday").style.color="red"
            document.getElementById("errorday").innerHTML="please enter a valid day"
        }
        else
        {
            document.getElementById("errorday").style.display="none"
        }
    
    }
    else if(month.value=="")
    {
        document.getElementById("errormonth").style.display="block"
        document.getElementById("errormonth").style.color="red"
        document.getElementById("errormonth").innerHTML="please enter a valid month"
        if(month.value>=12||month.value<=0)
        {
            document.getElementById("errormonth").style.display="block"
            document.getElementById("errormonth").style.color="red"
            document.getElementById("errormonth").innerHTML="please enter a valid month"
        }
        else
        {
            document.getElementById("errormonth").style.display="none"
        }
    }
    else if(year.value=="")
    {
        document.getElementById("erroryear").style.display="block"
        document.getElementById("erroryear").style.color="red"
        document.getElementById("erroryear").innerHTML="please enter a valid year"
        if(year.value>=2021||year.value<=1900)
        {
            document.getElementById("erroryear").style.display="block"
            document.getElementById("erroryear").style.color="red"
            document.getElementById("erroryear").innerHTML="please enter a valid year"
        }
        else
        {
            document.getElementById("erroryear").style.display="none"
        }
    
    }
    else
    {
        // let currentdate=new Date()
        const currentDate = new Date();

const Cyear = currentDate.getFullYear();
const Cmonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
const Cday = currentDate.getDate();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const milliseconds = currentDate.getMilliseconds();

console.log("Current date and time:");
console.log(`${Cyear}-${Cmonth}-${Cday} ${hours}:${minutes}:${seconds}.${milliseconds}`);


        yearSpan.innerHTML= Cyear-year.value
        monthSpan.innerHTML=Cmonth-month.value
        daySpan.innerHTML=Math.abs(Cday-day.value)
    }
}